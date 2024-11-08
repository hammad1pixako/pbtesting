import { useState, useEffect } from 'react';


// function to round and make value two decimal place
export function roundValue(val) {
    return (Math.round(val * 20) / 20);
}
