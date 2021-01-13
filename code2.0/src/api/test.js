import http from '@/utils/request';
//实例
export const getListByCode=(params)=>http.get(`/dictionary/listByCode/${params}`).then(res=>res).catch(error=>error);