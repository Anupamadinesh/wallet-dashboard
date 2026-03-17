export const store = {
  wallet: {
    totalBalance: 45231.89,
    currency: "USD",
    changePercent: 20.1,
    chartData: [
      { date: "Apr 9", amount: 12 },
      { date: "Apr 19", amount: 18 },
      { date: "Apr 29", amount: 10 },
      { date: "May 9", amount: 22 },
      { date: "May 19", amount: 16 },
      { date: "May 30", amount: 25 },
      { date: "Jun 9", amount: 19 },
      { date: "Jun 19", amount: 24 },
      { date: "Jun 30", amount: 21 }
    ]
  },

  summaryCards: [
    { id: 1, title: "Referral", amount: 2362, currency: "USD", note: "+20.1% from last month" },
    { id: 2, title: "Bonus", amount: 2362, currency: "USD", note: "+20.1% from last month" }
  ],

  bankAccounts: [
    { id: 1, bankName: "Citi Bank", balance: 5000000, note: "+125 since last hour" },
    { id: 2, bankName: "Barclays Bank", balance: 120353, note: "+125 since last hour" },
    { id: 3, bankName: "Axis Bank", balance: 110353, note: "+125 since last hour" },
    { id: 4, bankName: "Barclays Bank", balance: 110353, note: "+1222 since last hour" }
  ],

  walletAccounts: [
    { id: 1, walletName: "Wallet A", balance: 10000, note: "+125 since last hour" },
    { id: 2, walletName: "Wallet B", balance: 5000, note: "+125 since last hour" },
    { id: 3, walletName: "Wallet C", balance: 5000, note: "+125 since last hour" },
    { id: 4, walletName: "Wallet D", balance: 5000, note: "+125 since last hour" }
  ],

  transactions: [
    {
      id: 1,
      type: "deposit",
      title: "Added to Wallet 1",
      amount: 21282,
      currency: "GBP",
      date: "May 22, 2025, 6:35 PM",
      status: "Success"
    },
    {
      id: 2,
      type: "withdraw",
      title: "Withdrawn",
      amount: 15750,
      currency: "USD",
      date: "June 10, 2025, 2:15 PM",
      status: "Success"
    },
    {
      id: 3,
      type: "deposit",
      title: "Added to Wallet 2",
      amount: 7500,
      currency: "EUR",
      date: "July 5, 2025, 11:45 AM",
      status: "Success"
    },
    {
      id: 4,
      type: "withdraw",
      title: "Withdrawn",
      amount: 5000,
      currency: "USD",
      date: "July 8, 2025, 5:40 PM",
      status: "Pending"
    }
  ]
};