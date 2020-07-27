const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  facility: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "Facility",
      },
      qty: {
        type: String,
        required: true,
      },
      newString: {
        type: String,
      },
      //   etc
    },
  ],
});
