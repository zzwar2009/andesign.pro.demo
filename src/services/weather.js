import request from '@/utils/request';
export async function queryList() {
  return request('https://www.tianqiapi.com/api/');
}