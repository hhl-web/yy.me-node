import axios  from "axios";

// 关于list模块的model（数据层）处理
class ListModel{
    getList(){
        return axios.get('url')
    }
}

export default ListModel;