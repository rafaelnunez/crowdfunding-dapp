export const daysLeft = (deadline: string | number) => {
    const _date: Date = new Date(deadline);
    const secondDate: Date = new Date();
    const difference = _date.getTime() - secondDate.getTime();
    
    const remainingDays = difference / (1000 * 3600 * 24);
  
    return remainingDays.toFixed(0);
  };
  
  export const calculateBarPercentage = (goal: any, raisedAmount: number) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };
  
  export const checkIfImage = (url: string, callback: any) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };