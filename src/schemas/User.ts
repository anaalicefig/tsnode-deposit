import { Schema, Model, Document, model } from 'mongoose'
import { UserInterface } from '../interfaces/User'

export interface UserModel extends UserInterface, Document {
    fullName(): string
}

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true
})

UserSchema.methods.fullName = function(): string {
    return (this.firstName.trim() + ' ' + this.lastName.trim())
}

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
