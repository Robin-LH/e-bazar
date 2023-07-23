const discountCheck = (discount: any, price: number) => {
  if (!discount.start && !discount.end) return { hasDiscount: false };

  const startDate = new Date(discount.start).getTime();
  const endDate = new Date(discount.end).getTime();
  const today = new Date().getTime();

  if (startDate < today && endDate > today) {
    const currentPrice = price - Math.round((price / 100) * 25);
    return { hasDiscount: true, currentPrice };
  }

  return { hasDiscount: false };
};

export default discountCheck;
