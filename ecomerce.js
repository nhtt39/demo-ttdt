function purchase(totalAmount) {

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
