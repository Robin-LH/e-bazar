import BoxIcon from "@/assets/icons/boxIcon";
import VendorIcon from "@/assets/icons/vendorIcon";
import WareHouseIcon from "@/assets/icons/wareHouseIcon";
import Container from "@/components/container";
import Typography from "@/components/typography";
import { FC } from "react";

const cards = [
  {
    id: 1,
    title: `Total Product : 100`,
    description: "Warehouse has total of 100 product today & the max capacity is 200.",
    icon: <WareHouseIcon />,
  },
  {
    id: 2,
    title: `Total Vendor: 06`,
    description: "A total of 6 out of 10 vendor are available for supply now.",
    icon: <VendorIcon />,
  },
  {
    id: 3,
    title: `Unique Product : 40`,
    description: "Total number of products that are not duplicate or redundant.",
    icon: <BoxIcon />,
  },
];

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <Container className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="heroCard bg-gradient-to-r from-[#2F80ED] to-[#276dcb] rounded-lg py-8 px-6 lg:px-10"
        >
          <div className="text-white flex flex-col gap-1 lg:gap-4 ">
            {card.icon}
            <Typography variant="H3" className="text-white">
              {card.title}
            </Typography>
            <Typography>{card.description}</Typography>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default HeroSection;
