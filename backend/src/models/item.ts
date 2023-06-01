import mongoose, { Schema, Document, Model } from 'mongoose';

interface Item extends Document {
  message: string;
}

const ItemSchema: Schema<Item> = new Schema<Item>({
  message: {
    type: String,
    required: true
  }
});

const Item: Model<Item> = mongoose.model<Item>('Item', ItemSchema);

export default Item;
