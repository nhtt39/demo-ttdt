function purchase(totalAmount) {
<<<<<<< HEAD

    // Kiểm tra tổng tiền hợp lệ
    if (totalAmount < 0) {
        throw new Error("Tổng tiền không được âm");
    }

    // Tính 5% thuế
    const tax = totalAmount * 0.05;

    // Tổng tiền sau khi cộng 5%
    const finalAmount = totalAmount + tax;

    return finalAmount;
}
=======
    // Giảm giá 10% trên tổng tiền tạm tính
    const discountRate = 0.10;
    const discountAmount = totalAmount * discountRate;
    const totalAfterDiscount = totalAmount - discountAmount;

    return totalAfterDiscount;
}
>>>>>>> origin/main
