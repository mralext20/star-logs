import mongoose from "mongoose";
import Value from "../models/Ship";

const _repository = mongoose.model("Ships", Value);

class ShipService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async create(rawData) {
    return await _repository.create(rawData)
  }
  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id)
  }
}

const shipService = new ShipService();
export default shipService;
