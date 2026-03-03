export default class SaveSystem {

    static load(){
        let save = localStorage.getItem("uv_save");
        return save ? JSON.parse(save) : {
            hp:100,
            violence:0,
            mercy:0,
            reflection:0,
            resets:0,
            progress:0,
            wins:0,
            abilities:{
                slowTime:false
            }
        };
    }

    static save(data){
        localStorage.setItem("uv_save", JSON.stringify(data));
    }

    static reset(data){
        data.resets++;
        this.save(data);
    }
}