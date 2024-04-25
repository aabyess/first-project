// 유저 스키마
// 스키마란? 데이터의 설계도 레파지토리 같은거???라고 생각
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ //유저 이름, 토큰(연결 ID 정보)을 가질거다 
    name: {
        type: String,
        required: [true, "User must type name"],
        unique: true,
    },
    token: {
        type: Boolean,
        default: false,
    },
    online: {           //유저가 온라인인지 오프라인인지
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("User", userSchema);