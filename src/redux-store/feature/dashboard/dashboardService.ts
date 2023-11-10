
import orderService from "../orders/orderService";
import productService from "../products/productService";
import paymentService from "../payment/paymentService";
import userService from "../user/userService";
import categoryService from "../category/categoryService";

const panelData = async () => {
    var totAmout = 0
    var todayOrder = 0
    const orders = await orderService.getAllOrders()
    const products = await productService.listProducts()
    const payment = await paymentService.getAllPayments()
    const users = await userService.getAllUsers()

    console.log(products.result.length)
    orders.map((order: any) => {
        const date = new Date(Date.now())
        const orderdate = new Date(order.createdAt)
        if (orderdate.getDay() === date.getDay())
        {
            todayOrder += 1
        }
    })
    payment.map((p: any) => {
        totAmout = totAmout + p.amount/100
    })
    return {success: true, totOrders: orders.length, totProducts: products.result.length, totPayments: payment.length, totCustomers: users.length, totAmount: totAmout, todayOrders: todayOrder}
}

const chartData = async () => {
    const payment = await paymentService.getAllPayments()

    let amountD0 = 0, amountD1 = 0, amountD2 = 0, amountD3 = 0, amountD4 = 0, amountD5 = 0, amountD6 = 0
    
    // amountD0 =100
    payment.map((p: any) => {
            const pDate = new Date(p.createdAt)
        const date = new Date(Date.now())
        console.log("panel",)

        // console.log("panel", date.getDate())
        if (pDate.getDay() == date.getDay())
        {
            console.log("Hello world")
            amountD0 += p.amount/100
        }if (pDate.getDay() == date.getDay()-1)
        {
            console.log("Hello world")
            amountD1 += p.amount/100
        }if (pDate.getDay() == date.getDay()-2)
        {
            console.log("Hello world")
            amountD2 += p.amount/100
        }if (pDate.getDay() == date.getDay()-3)
        {
            console.log("Hello world")
            amountD3 += p.amount/100
        }if (pDate.getDay() == date.getDay()-4)
        {
            console.log("Hello world")
            amountD4 += p.amount/100
        }if (pDate.getDay() == date.getDay()-5)
        {
            console.log("Hello world")
            amountD5 += p.amount/100
        }if (pDate.getDay() == date.getDay()-6)
        {
            console.log("Hello world")
            amountD6 += p.amount/100
        }
    })

    var dailyAmount: number[] = [amountD0, amountD1, amountD2, amountD3, amountD4, amountD5, amountD6]
    console.log(dailyAmount)
    return dailyAmount
}


const dashboardService = {
    panelData,
    chartData
}

export default dashboardService