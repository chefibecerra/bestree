import moongose, {Schema} from 'mongoose';

const UserSchema = new Schema({
    name: {
        String, 
        required: true,
        trim: true
    },
    email: {
        String, 
        required: true,
        trim: true,
        unique: true
    },
    password: {
        String, 
        required: true,
        trim: true
    },
});

const User = moongose.model('User', UserSchema);
export default User;