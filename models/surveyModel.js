const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: [String],
    required: true,
  },
  MealsPerDay: {
    type: String,
    required: true,
  },
  FruitAndVegetables: {
    type: String,
    required: true,
  },
  UnhealthyFoodFrequency: {
    type: String,
    required: true,
  },
  WaterIntake: {
    type: String,
    required: true,
  },
  WorkoutDaysPerWeek: {
    type: String,
    required: true,
  },
  WorkoutDuration: {
    type: String,
    required: true,
  },
  WorkoutTypes: {
    type: [String],
    required: true,
  },
  WorkoutSatisfaction: {
    type: String,
    required: true,
  },
  UsesSupplements: {
    type: Boolean,
    required: true,
  },
  SupplementTypes: {
    type: [String],
    required: function () {
      return this.UsesSupplements === true;
    },
  },
  SupplementFrequency: {
    type: String,
    required: function () {
      return this.UsesSupplements === true;
    },
  },
  GeneralHealth: {
    type: String,
    required: true,
  },
  FitnessGoals: {
    type: String,
    required: false,
  },
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;