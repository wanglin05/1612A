import request from '../utils/request';
const api={
    submitFile:(filedata)=>request.post("/api/upload",filedata),
    submitovertime:(data)=>request.post("/api/apply/overtime",data)
}
export default api;