const { Attraction, Plan, User } = require("../models");

exports.SavePlan = async (req, res) => {
  try {
    const { selectedUserPlan, duration, name, who, how } = req.body;
    const { front_id } = req.decoded;
    const user = await User.findOne({ where: { user_id: front_id } });
    if (user) {
      const savePlan = await Plan.create({
        duration: duration,
        plan: name,
        user_id: user.id,
      });
      selectedUserPlan.forEach(async (plansPerDay) => {
        const { day, plan } = plansPerDay;
        plan.forEach(async (plansOfDay, index) => {
          const saveAttr = await Attraction.create({
            att_name: plansOfDay.name,
            lat: plansOfDay.attractionLocation.latitude,
            lng: plansOfDay.attractionLocation.longitude,
            star: 0,
            index: index + 1,
            plan_id: savePlan.id,
            day: day,
            who: who[0],
            how: how[0],
          });
        });
      });
      res.send("success");
    } else {
      res.send("user not exist");
    }
    // const savePlanTable = await Plan.create({
    //   plan,
    //   user_id: id,
    // });
    // plan.forEach(async (value, index) => {
    //   const { name, img, attractionLocation } = value;
    //   const saveAttrTable = await Attraction.create({
    //     att_name: name,
    //     north: attractionLocation.latitude,
    //     east: attractionLocation.longitude,
    //     start: 0,
    //   });
    // });
  } catch (error) {
    console.log(error);
  }
};

exports.GetPlan = async (req, res) => {
  try {
    const {id} = req.body;
    const plan = await Plan.findOne({where : {id}})
    const attraction = await Attraction.findAll({where : {plan_id : plan.id}})
    res.json({plan, attraction})
  } catch (error) {
    console.log(error);
  }
}