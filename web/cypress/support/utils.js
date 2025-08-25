  export function getTodayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');       // ensures two digits
    const month = String(today.getMonth() + 1).padStart(2, '0'); // months start at 0
    const year = today.getFullYear();
    
    return `${day}/${month}/${year}`;
  }