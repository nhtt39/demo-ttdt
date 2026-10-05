function purchase(totalAmount) {
    // Giảm giá 10% trên tổng tiền tạm tính
    const discountRate = 0.10;
    const discountAmount = totalAmount * discountRate;
    const totalAfterDiscount = totalAmount - discountAmount;

    return totalAfterDiscount;
}