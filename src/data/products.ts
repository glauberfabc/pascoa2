export interface ProductSection {
    title: string;
    description: string;
}

export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    folderPath: string;
    themeColor: string;
    textColor: string;
    gradient: string;
    section1: ProductSection;
    section2: ProductSection;
    section3: ProductSection;
    section4: ProductSection;
}

export const products: Product[] = [
    {
        id: "metodo-pascoa-lucrativa",
        name: "Fature R$ 5.000,00 extras nesta Páscoa",
        subName: "Trabalhando apenas 15 dias na cozinha da sua casa",
        price: "R$ 47,00",
        folderPath: "/images/easter-egg-rotate",
        themeColor: "#FFB6C1",
        textColor: "#8A2BE2",
        gradient: "linear-gradient(135deg, #87CEEB 0%, #90EE90 100%)",
        section1: {
            title: "Comece do Absoluto Zero",
            description: "Descubra o método de produção em série para quem quer lucro rápido sem precisar de equipamentos profissionais. Transforme sua cozinha em uma verdadeira fábrica de delícias.",
        },
        section2: {
            title: "A OPORTUNIDADE (O RELÓGIO ESTÁ CORRENDO)",
            description: "O calendário não mente: faltam poucas semanas para a Páscoa. Enquanto a maioria das pessoas vai tentar vender ovos de forma amadora, passando noites em claro e lucrando pouco, existe um grupo que vai faturar alto usando a ENGENHARIA DE PRODUÇÃO. Você não precisa ser uma confeiteira profissional. Você só precisa do método certo para transformar sua cozinha em uma pequena fábrica altamente lucrativa por apenas 15 dias.",
        },
        section3: {
            title: "Lucro Certo",
            description: "Esqueça receitas complicadas. Focamos no que realmente vende! Estratégias validadas para criar ofertas irresistíveis e conquistar clientes já nas primeiras semanas.",
        },
        section4: {
            title: "Sua Virada de Chave",
            description: "Não deixe para a última hora. Garanta seu acesso ao método agora mesmo e comece a faturar imediatamente. A Páscoa já está chegando e o mercado espera por você.",
        },
    }
];
