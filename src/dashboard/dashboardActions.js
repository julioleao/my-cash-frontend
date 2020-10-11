import axios from 'axios';

export const BASE_URL = `${process.env.REACT_APP_API_URL}/api`;
export const BILLING_SUMMARY_FETCHED = 'BILLING_SUMMARY_FETCHED';

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`);
  return {
    type: BILLING_SUMMARY_FETCHED,
    payload: request,
  };
}
