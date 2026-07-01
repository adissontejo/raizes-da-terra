import { Icon } from "@iconify/react";
import { useState } from "react";
import { ProducerCard, type ProducerCardProps } from "./ProducerCard";
import { ProductCard, type ProductCardProps } from "./ProductCard";
import { useGetProducersQuery } from "~/services/api/modules/producers/queries/useGetProducersQuery";
import { useGetProductsQuery } from "~/services/api/modules/products/queries/useGetProductsQuery";
import { useGetCategoriesQuery } from "~/services/api/modules/categories/queries/useGetCategoriesQuery";
import { EmptyState } from "../../components/EmptyState";

const COLS_PRODUTORES = 3;
const COLS_PRODUTOS = 4;

const imageUrl = (path?: string | null): string | undefined => {
  if (!path) return undefined;
  return `${import.meta.env.VITE_SERVER_URL}${path}`;
};

export const Discover = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showAllProducers, setShowAllProducers] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { data: producers = [], isLoading: loadingProducers } =
    useGetProducersQuery(query || undefined);

  const { data: categories = [], isLoading: loadingCategories } =
    useGetCategoriesQuery();

  const { data: products = [], isLoading: loadingProducts } =
    useGetProductsQuery(query || undefined, selectedCategories);

  const handleSearch = () => {
    setQuery(search);
    setShowAllProducers(false);
    setShowAllProducts(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const toggleCategory = (name: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(name)) {
        return prev.filter((c) => c !== name);
      }
      return [...prev, name];
    });
    setShowAllProducts(false);
  };

  const isAllSelected = selectedCategories.length === 0;

  const visibleProducers = showAllProducers
    ? producers
    : producers.slice(0, COLS_PRODUTORES);

  const visibleProducts = showAllProducts
    ? products
    : products.slice(0, COLS_PRODUTOS);

  const hasMoreProducers = producers.length > COLS_PRODUTORES;
  const hasMoreProducts = products.length > COLS_PRODUTOS;

  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-20 py-20 px-8">
      {/* Hero Section */}
      <div className="w-full max-w-[768px] flex flex-col items-center gap-0">
        <h1 className="font-ibm font-medium text-[50.2px] leading-[60px] tracking-[-1.5px] text-base-title text-center">
          Descubra a origem do seu alimento
        </h1>

        <p className="text-lg leading-7 text-clay text-center max-w-[732px] mt-6 mb-10">
          Conectando você diretamente aos pequenos produtores artesanais que
          preservam os sabores autênticos da nossa terra. Sem intermediários.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-[672px] flex flex-row items-center gap-0 bg-[#C9A97A1A] border border-[#C9A97A66] rounded-full p-2">
          <div className="flex-1 flex flex-row items-center gap-2 pl-5 pr-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Buscar por queijos, doces ou produtores..."
              className="w-full bg-transparent text-sm text-clay placeholder:text-[#7A4E2D99] outline-none"
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-base-title text-base-background text-sm font-medium px-6 py-2.5 rounded-full whitespace-nowrap hover:brightness-80 transition-[filter]"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Produtores em Destaque Section */}
      <section className="w-full flex flex-col items-start gap-10">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-ibm text-[24.8px] leading-9 tracking-[-0.75px] text-base-title">
              Produtores em Destaque
            </h2>
            <p className="text-sm text-clay">
              Conheça as mãos por trás do que você consome.
            </p>
          </div>
        </div>

        {loadingProducers ? (
          <div className="w-full py-12 flex items-center justify-center text-clay text-sm">
            Carregando produtores...
          </div>
        ) : producers.length === 0 ? (
          <div className="w-full">
            <EmptyState type="produtores" />
          </div>
        ) : (
          <div className="w-full grid grid-cols-3 gap-8">
            {visibleProducers.map((producer) => {
              const card: ProducerCardProps = {
                name: producer.brandName,
                state: producer.state,
                category: "Produtor",
                rating: 4.9,
                description: producer.bioPhrase ?? producer.bio ?? "",
                imageSrc: imageUrl(producer.profilePhotoUrl),
              };
              return <ProducerCard key={producer.id} {...card} />;
            })}
          </div>
        )}

        {!loadingProducers && producers.length > 0 && hasMoreProducers && (
          <div className="w-full flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setShowAllProducers((v) => !v)}
              className="border border-clay text-base-title text-sm font-normal px-8 py-3 rounded-lg hover:bg-[#DDC6A44D] transition-colors"
            >
              {showAllProducers ? "Ver menos" : "Ver todos os produtores"}
            </button>
            <div className="bg-base-background text-clay text-sm px-3 py-2 rounded-lg">
              {visibleProducers.length}/{producers.length}
            </div>
          </div>
        )}
      </section>

      {/* Roda Teto Divider */}
      <div className="w-full flex items-center justify-center gap-4">
        <div className="flex-1 h-px bg-[#C9A97A4D]" />
        <Icon
          icon="solar:leaf-linear"
          width={28}
          height={28}
          className="text-[#C9A97A]"
        />
        <div className="flex-1 h-px bg-[#C9A97A4D]" />
      </div>

      {/* Catálogo Geral de Produtos */}
      <section className="w-full flex flex-col items-start gap-10">
        <div className="w-full flex items-end gap-0">
          <div className="flex flex-col gap-2">
            <h2 className="font-ibm text-[24.8px] leading-9 tracking-[-0.75px] text-base-title">
              Da terra para sua mesa
            </h2>
            <p className="text-sm text-clay">
              Descubra produtos sazonais e autênticos.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="w-full flex items-center gap-3 overflow-x-auto py-4">
          {/* "Todos" pill */}
          <button
            onClick={() => setSelectedCategories([])}
            className={`whitespace-nowrap text-sm font-normal px-5 py-2 rounded-full transition-colors ${
              isAllSelected
                ? "bg-base-title text-base-background border border-base-title"
                : "border border-[#C9A97A80] text-clay hover:bg-[#DDC6A44D]"
            }`}
          >
            Todos
          </button>

          {loadingCategories ? (
            <span className="text-sm text-clay">Carregando categorias...</span>
          ) : (
            categories.map((cat) => {
              const isSelected = selectedCategories.includes(cat.name);
              return (
                <button
                  key={cat.name}
                  onClick={() => toggleCategory(cat.name)}
                  className={`whitespace-nowrap text-sm font-normal px-5 py-2 rounded-full transition-colors ${
                    isSelected
                      ? "bg-base-title text-base-background border border-base-title"
                      : "border border-[#C9A97A80] text-clay hover:bg-[#DDC6A44D]"
                  }`}
                >
                  {cat.description}
                </button>
              );
            })
          )}
        </div>

        {loadingProducts ? (
          <div className="w-full py-12 flex items-center justify-center text-clay text-sm">
            Carregando produtos...
          </div>
        ) : products.length === 0 ? (
          <div className="w-full">
            <EmptyState type="produtos" />
          </div>
        ) : (
          <>
            <div className="w-full grid grid-cols-4 gap-8">
              {visibleProducts.map((product) => {
                const card: ProductCardProps = {
                  name: product.name,
                  producer: product.producerBrandName,
                  priceFrom: product.price,
                  imageSrc: imageUrl(product.imageUrl),
                };
                return <ProductCard key={product.id} {...card} />;
              })}
            </div>

            {hasMoreProducts && (
              <div className="w-full flex items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setShowAllProducts((v) => !v)}
                  className="border border-clay text-base-title text-sm font-normal px-8 py-3 rounded-lg hover:bg-[#DDC6A44D] transition-colors"
                >
                  {showAllProducts ? "Ver menos" : "Ver mais produtos"}
                </button>
                <div className="bg-base-background text-clay text-sm px-3 py-2 rounded-lg">
                  {visibleProducts.length}/{products.length}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};
