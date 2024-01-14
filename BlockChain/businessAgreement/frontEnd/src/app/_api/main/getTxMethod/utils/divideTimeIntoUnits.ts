export const divideTimeIntoUnits = ( blockTime: number) => {
    const now = new Date().getTime();

    const timestampInMilliseconds = blockTime * 1000;
  
    const difference = now - timestampInMilliseconds;
    if (Math.floor(difference / 3600000) > 1) {
      return `${Math.floor(difference / 3600000)} hours ago`;
    } else if (Math.floor(difference / 60000) > 1) {
      return `${Math.floor(difference / 60000)} minutes ago`;
    } else {
      return `${Math.floor(difference / 1000)} seconds ago`;
    }
  };
  