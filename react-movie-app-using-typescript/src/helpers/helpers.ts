// Convert time to hours and minutes
export const calcTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to money formatting
export const convertMoney = (money: number) => {
  const formatValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
  return formatValue.format(money);
};

// Session Storage
export const isPersistedState = (stateName:string) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
}
