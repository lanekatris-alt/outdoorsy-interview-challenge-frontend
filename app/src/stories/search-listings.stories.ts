import {Meta, StoryObj} from "@storybook/react";
import {SearchListings} from "../listings/search-listings";

const meta: Meta<typeof SearchListings> = {
    title: 'Example/Search Listings',
    component: SearchListings,
    parameters: {
        mockData: [
            {
                url: 'https://search.outdoorsy.com/rentals?filter[keywords]=trailer&page[limit]=5',
                method: 'GET',
                status: 200,
                response: {

                        "data": [
                            {
                                "id": "327967",
                                "type": "rentals",
                                "attributes": {
                                    "Explanation": null,
                                    "active_options": {
                                        "cancel_policy": "moderate",
                                        "cancel_policy_combo_bookings": "",
                                        "date": "2023-05-17",
                                        "instant_book": false,
                                        "minimum_days": 3,
                                        "monthly_discount_percentage": 25,
                                        "monthly_rate_per_day": 9000,
                                        "price_per_day": 12000,
                                        "price_per_month": 252000,
                                        "price_per_week": 75600,
                                        "tax": 0,
                                        "use_day_pricing": false,
                                        "use_tax_inclusive_pricing": false,
                                        "weekly_discount_percentage": 9.9,
                                        "weekly_rate_per_day": 10800
                                    },
                                    "availability_set": false,
                                    "average_ratings": {
                                        "cleanliness_score": 1,
                                        "cleanliness_score_percentage": 20,
                                        "communication_score": 3,
                                        "communication_score_percentage": 60,
                                        "listing_score": 1,
                                        "listing_score_percentage": 20,
                                        "mechanical_score": 1,
                                        "mechanical_score_percentage": 20,
                                        "score": 3,
                                        "score_percentage": 60,
                                        "value_score": 1,
                                        "value_score_percentage": 20
                                    },
                                    "average_reviews": null,
                                    "cancel_policy": "moderate",
                                    "cancel_policy_combo_bookings": "",
                                    "cancel_text": "",
                                    "catalog": null,
                                    "check_in": 0,
                                    "check_out": 0,
                                    "children_count": 0,
                                    "coachnet_ready": true,
                                    "coachnet_required": false,
                                    "combined_special_hours": [],
                                    "created": "0001-01-01T00:00:00Z",
                                    "current_location_id": 0,
                                    "custom_insurance_text": "",
                                    "dealer": false,
                                    "delivery": true,
                                    "delivery_radius": 100,
                                    "delivery_usage_item_id": 409278,
                                    "deposit_percentage": 0,
                                    "description": "",
                                    "description_included": "Camper comes with all the following amenities:\n      \n    •     • Fresh linens\n    •     • Fresh towels/washcloths\n    •     • Keurig Coffee Maker\n    •     • Full set of pots/pans\n    •     • Set for 4 of dishes/cups/bowls/silverware\n    •     • Cooking utensils\n    •     • Cleaning supplies\n    •         ◦ Dish soap\n    •         ◦ Disinfectant wipes\n    •         ◦ Clorox cleaning wipes\n    •         ◦ Broom\n    •         ◦ Trash can/trash bags\n    •     • Some bug control materials\n    •     • Chain loaded tension hitch\n    •     • All connections including\n    •         ◦ Water hoses\n    •         ◦ Water pressure regulators\n    •         ◦ Power cords\n    •         ◦ Adapters\n    •         ◦ Sewage drain hoses\n\nWe like to say that all you need to bring with you is your clothing and food (and adults beverages if that suits your needs) :-)",
                                    "description_other": "Please be very careful with the awing and be sure to hit the retract button when bringing it in.  Over extending the awning is a great way to bend the traction arms and this is an $1,800 fix.  You would be surprised how often this happens.  Also suggest you bring in the awning during higher winds to avoid any damage; rain is ok, wind is not.  ABSOLUTELY NO SMOKING IN THE CAMPER but pets are certainly welcome.",
                                    "description_recommendations": "",
                                    "display_vehicle_type": "Travel trailer",
                                    "distributed_ratings": {
                                        "score": {
                                            "r1": 50,
                                            "r2": 0,
                                            "r3": 0,
                                            "r4": 0,
                                            "r5": 50
                                        }
                                    },
                                    "education": [],
                                    "external": false,
                                    "favorite": false,
                                    "favorite_count": 8,
                                    "features": {
                                        "air_conditioner": true,
                                        "audio_inputs": true,
                                        "awning": true,
                                        "backup_camera": false,
                                        "base_weight": 12539,
                                        "beds_bunk": 3,
                                        "beds_dinette_conversion": 1,
                                        "beds_fold_out_sofa": 1,
                                        "beds_full": 0,
                                        "beds_king": 0,
                                        "beds_other": null,
                                        "beds_queen": 1,
                                        "beds_twin": 0,
                                        "bike_rack": false,
                                        "brake_controller": true,
                                        "burning_man_friendly": true,
                                        "carrying_capacity": 2961,
                                        "cd_player": true,
                                        "ceiling_fan": true,
                                        "connector_type": "7pin",
                                        "dining_table": true,
                                        "extra_storage": true,
                                        "festival_friendly": true,
                                        "generator": false,
                                        "gray_tank": 76,
                                        "gross_vehicle_weight": 0,
                                        "handicap_accessible": false,
                                        "heater": true,
                                        "hitch_weight": 837,
                                        "hookup_electric": true,
                                        "hookup_sewer": true,
                                        "hookup_water": true,
                                        "hot_water_tank": false,
                                        "inside_shower": true,
                                        "international_travel_allowed": false,
                                        "inverter": false,
                                        "kitchen_sink": true,
                                        "leveling_jacks": true,
                                        "microwave": true,
                                        "minimum_age": 0,
                                        "mpg": 0,
                                        "one_way_rentals": false,
                                        "outside_shower": true,
                                        "oven": true,
                                        "pet_friendly": true,
                                        "propane_tank": 14,
                                        "provides_receivers": true,
                                        "radio": true,
                                        "refrigerator": true,
                                        "satellite": false,
                                        "sewage_tank": 38,
                                        "skylight": true,
                                        "slide_outs": 3,
                                        "smoking_allowed": false,
                                        "solar": true,
                                        "stove": true,
                                        "tailgate_friendly": true,
                                        "toilet": true,
                                        "tow_hitch": false,
                                        "trailer_weight": 7837,
                                        "tv_dvd": true,
                                        "washer_dryer": false,
                                        "water_tank": 64,
                                        "wifi": false
                                    },
                                    "first_published": "2022-09-13T09:04:47.714711-07:00",
                                    "generator_usage_item_id": 0,
                                    "group_on_map": false,
                                    "group_reviews_num": 0,
                                    "group_reviews_score": 0,
                                    "group_score": 0,
                                    "has_been_published": true,
                                    "has_checkout_questions": false,
                                    "hidden": false,
                                    "host_notes": "",
                                    "house_rules": "",
                                    "instant_book": false,
                                    "instant_book_leeway": 0,
                                    "insurance_coverage": "",
                                    "insurance_eligible": true,
                                    "insurance_plan": {
                                        "id": 97,
                                        "label": "Outdoorsy Towable Protection",
                                        "renter_body": "",
                                        "renter_headline": "",
                                        "requires_driver_verification": false
                                    },
                                    "insurance_renter_adjustable": false,
                                    "insurance_state": "approved",
                                    "last_published": "2022-09-13T09:04:47.71467-07:00",
                                    "listing_questions": [],
                                    "locale": {
                                        "base_currency": "USD",
                                        "distance_unit": "miles",
                                        "length_unit": "feet",
                                        "liquid_unit": "gallons",
                                        "weight_unit": "lbs"
                                    },
                                    "location": {
                                        "city": "Belpre",
                                        "country": "US",
                                        "county": "",
                                        "lat": 39.273,
                                        "lng": -81.581,
                                        "state": "OH",
                                        "zip": "45714"
                                    },
                                    "mileage_usage_item_id": 409279,
                                    "minimum_days": 0,
                                    "minimum_deposit": 0,
                                    "name": "22MV6372 2022 Forest River Cherokee Grey Wolf 29TE",
                                    "nearby_content": [],
                                    "original_url": "",
                                    "owner_score": 0,
                                    "parent_id": 0,
                                    "position": 0,
                                    "preferred_primary_image": {
                                        "amenity": null,
                                        "best": false,
                                        "category": null,
                                        "description": "",
                                        "position": 0,
                                        "primary": false,
                                        "rental_id": 0,
                                        "review": null,
                                        "skip_enhance": false,
                                        "status": "",
                                        "tags": "",
                                        "url": "",
                                        "video": false
                                    },
                                    "prep_fee": {
                                        "amount": 5000,
                                        "description": "This fee will cover preparing and sanitizing the unit prior to each rental."
                                    },
                                    "presentment_currency": "USD",
                                    "price_per_day": 12000,
                                    "price_per_month": 291600,
                                    "price_per_week": 72000,
                                    "primary_image_url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727196/p/rentals/327967/images/iohyufqwjz083genesd5.jpg",
                                    "pro": false,
                                    "published": true,
                                    "ranking": {
                                        "distance_weight": {
                                            "control": 0.35,
                                            "test_1": 0.6,
                                            "test_2": 0.35,
                                            "test_3": 0.35
                                        },
                                        "distance_weight_prod": 0.35,
                                        "is_new_listing": 0,
                                        "model_name": "model_gbt_web_072522",
                                        "original_score": 0,
                                        "ranking_score": 0.5158,
                                        "ranking_score2": 0.4644,
                                        "ranking_score3": 0.5158
                                    },
                                    "rental_category": "rv",
                                    "rental_score": 0,
                                    "request_less_than_minimum_days": 7,
                                    "review_scores": {
                                        "bayesian_rating": 1.5623520662342114
                                    },
                                    "reviews_num": 1,
                                    "score": 1,
                                    "seatbelts": 0,
                                    "security_deposit": 50000,
                                    "seo_content": {
                                        "category": []
                                    },
                                    "settlement_currency": "USD",
                                    "sleeps": 10,
                                    "sleeps_adults": 0,
                                    "sleeps_kids": 0,
                                    "slug": "/rv-rental/belpre_oh/2022_forest-river_cherokee-grey-wolf_327967-listing",
                                    "smart_photo_score": 0,
                                    "sort_score": 3.419534,
                                    "stay": null,
                                    "stay_catalog": null,
                                    "summary": "",
                                    "tags": [],
                                    "tax_rates": [],
                                    "type": "trailer",
                                    "unavailable": false,
                                    "updated": "0001-01-01T00:00:00Z",
                                    "use_day_pricing": false,
                                    "use_tax_inclusive_pricing": false,
                                    "user_slug": "",
                                    "vehicle_amps": 0,
                                    "vehicle_box_length": 0,
                                    "vehicle_class": "",
                                    "vehicle_dry_weight": 12539,
                                    "vehicle_gvwr": 7837,
                                    "vehicle_height": 0,
                                    "vehicle_length": 36,
                                    "vehicle_length_with_hitch": 0,
                                    "vehicle_license_plate_state": "OH",
                                    "vehicle_make": "Forest River",
                                    "vehicle_model": "Cherokee Grey Wolf",
                                    "vehicle_title": "2022 Forest River Cherokee Grey Wolf",
                                    "vehicle_width": 0,
                                    "vehicle_year": 2022
                                },
                                "relationships": {
                                    "images": {
                                        "data": [
                                            {
                                                "id": "2732010",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2722146",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731997",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731998",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731999",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732000",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732001",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732002",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732003",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732004",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732005",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732006",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732007",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732008",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732009",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732011",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2732012",
                                                "type": "images"
                                            }
                                        ]
                                    },
                                    "mileage_usage_item": {
                                        "data": {
                                            "id": "409279",
                                            "type": "usage_based_item"
                                        }
                                    },
                                    "owner": {
                                        "data": {
                                            "id": "2726002",
                                            "type": "users"
                                        }
                                    },
                                    "primary_image": {
                                        "data": {
                                            "id": "2732010",
                                            "type": "images"
                                        }
                                    }
                                }
                            },
                            {
                                "id": "327614",
                                "type": "rentals",
                                "attributes": {
                                    "Explanation": null,
                                    "active_options": {
                                        "cancel_policy": "moderate",
                                        "cancel_policy_combo_bookings": "",
                                        "date": "2023-05-17",
                                        "instant_book": false,
                                        "minimum_days": 3,
                                        "monthly_discount_percentage": 25,
                                        "monthly_rate_per_day": 8250,
                                        "price_per_day": 11000,
                                        "price_per_month": 231000,
                                        "price_per_week": 69300,
                                        "tax": 0,
                                        "use_day_pricing": false,
                                        "use_tax_inclusive_pricing": false,
                                        "weekly_discount_percentage": 9.9,
                                        "weekly_rate_per_day": 9900
                                    },
                                    "availability_set": false,
                                    "average_ratings": {
                                        "cleanliness_score": 5,
                                        "cleanliness_score_percentage": 100,
                                        "communication_score": 5,
                                        "communication_score_percentage": 100,
                                        "listing_score": 5,
                                        "listing_score_percentage": 100,
                                        "mechanical_score": 5,
                                        "mechanical_score_percentage": 100,
                                        "score": 5,
                                        "score_percentage": 100,
                                        "value_score": 5,
                                        "value_score_percentage": 100
                                    },
                                    "average_reviews": null,
                                    "cancel_policy": "moderate",
                                    "cancel_policy_combo_bookings": "",
                                    "cancel_text": "",
                                    "catalog": null,
                                    "check_in": 0,
                                    "check_out": 0,
                                    "children_count": 0,
                                    "coachnet_ready": true,
                                    "coachnet_required": false,
                                    "combined_special_hours": [],
                                    "created": "0001-01-01T00:00:00Z",
                                    "current_location_id": 0,
                                    "custom_insurance_text": "",
                                    "dealer": false,
                                    "delivery": true,
                                    "delivery_radius": 100,
                                    "delivery_usage_item_id": 408826,
                                    "deposit_percentage": 0,
                                    "description": "",
                                    "description_included": "Camper comes with all the following amenities:\n      \n    •     • Fresh linens\n    •     • Fresh towels/washcloths\n    •     • Keurig Coffee Maker\n    •     • Full set of pots/pans\n    •     • Set for 4 of dishes/cups/bowls/silverware\n    •     • Cooking utensils\n    •     • Cleaning supplies\n    •         ◦ Dish soap\n    •         ◦ Disinfectant wipes\n    •         ◦ Clorox cleaning wipes\n    •         ◦ Broom\n    •         ◦ Trash can/trash bags\n    •     • Some bug control materials\n    •     • Chain loaded tension hitch\n    •     • All connections including\n    •         ◦ Water hoses\n    •         ◦ Water pressure regulators\n    •         ◦ Power cords\n    •         ◦ Adapters\n    •         ◦ Sewage drain hoses\n      \n      We like to say that all you need to bring with you is your clothing and food (and adults beverages if that suits your needs) :-)",
                                    "description_other": "Please be very careful with the awing and be sure to hit the retract button when bringing it in.  Over extending the awning is a great way to bend the traction arms and this is an $1,800 fix.  You would be surprised how often this happens.  Also suggest you bring in the awning during higher winds to avoid any damage; rain is ok, wind is not.  ABSOLUTELY NO SMOKING IN THE CAMPER but pets are certainly welcome.",
                                    "description_recommendations": "",
                                    "display_vehicle_type": "Travel trailer",
                                    "distributed_ratings": {
                                        "score": {
                                            "r1": 0,
                                            "r2": 0,
                                            "r3": 0,
                                            "r4": 0,
                                            "r5": 100
                                        }
                                    },
                                    "education": [],
                                    "external": false,
                                    "favorite": false,
                                    "favorite_count": 17,
                                    "features": {
                                        "air_conditioner": true,
                                        "audio_inputs": true,
                                        "awning": true,
                                        "backup_camera": false,
                                        "base_weight": 12539,
                                        "beds_bunk": 3,
                                        "beds_dinette_conversion": 1,
                                        "beds_fold_out_sofa": 1,
                                        "beds_full": 0,
                                        "beds_king": 0,
                                        "beds_other": null,
                                        "beds_queen": 1,
                                        "beds_twin": 0,
                                        "bike_rack": false,
                                        "brake_controller": true,
                                        "burning_man_friendly": true,
                                        "carrying_capacity": 2961,
                                        "cd_player": true,
                                        "ceiling_fan": true,
                                        "connector_type": "7pin",
                                        "dining_table": true,
                                        "extra_storage": true,
                                        "festival_friendly": true,
                                        "generator": false,
                                        "gray_tank": 76,
                                        "gross_vehicle_weight": 0,
                                        "handicap_accessible": false,
                                        "heater": true,
                                        "hitch_weight": 837,
                                        "hookup_electric": true,
                                        "hookup_sewer": true,
                                        "hookup_water": true,
                                        "hot_water_tank": false,
                                        "inside_shower": true,
                                        "international_travel_allowed": false,
                                        "inverter": false,
                                        "kitchen_sink": true,
                                        "leveling_jacks": true,
                                        "microwave": true,
                                        "minimum_age": 0,
                                        "mpg": 0,
                                        "one_way_rentals": false,
                                        "outside_shower": true,
                                        "oven": true,
                                        "pet_friendly": true,
                                        "propane_tank": 14,
                                        "provides_receivers": true,
                                        "radio": true,
                                        "refrigerator": true,
                                        "satellite": false,
                                        "sewage_tank": 38,
                                        "skylight": true,
                                        "slide_outs": 3,
                                        "smoking_allowed": false,
                                        "solar": true,
                                        "stove": true,
                                        "tailgate_friendly": true,
                                        "toilet": true,
                                        "tow_hitch": false,
                                        "trailer_weight": 7837,
                                        "tv_dvd": true,
                                        "washer_dryer": false,
                                        "water_tank": 64,
                                        "wifi": false
                                    },
                                    "first_published": "2022-09-11T08:10:14.636715-07:00",
                                    "generator_usage_item_id": 0,
                                    "group_on_map": false,
                                    "group_reviews_num": 0,
                                    "group_reviews_score": 0,
                                    "group_score": 0,
                                    "has_been_published": true,
                                    "has_checkout_questions": false,
                                    "hidden": false,
                                    "host_notes": "",
                                    "house_rules": "",
                                    "instant_book": false,
                                    "instant_book_leeway": 0,
                                    "insurance_coverage": "",
                                    "insurance_eligible": true,
                                    "insurance_plan": {
                                        "id": 97,
                                        "label": "Outdoorsy Towable Protection",
                                        "renter_body": "",
                                        "renter_headline": "",
                                        "requires_driver_verification": false
                                    },
                                    "insurance_renter_adjustable": false,
                                    "insurance_state": "approved",
                                    "last_published": "2022-09-11T08:10:14.636678-07:00",
                                    "listing_questions": [
                                        {
                                            "answer": "So long as we don't have any other bookings for the day we are pretty open when it comes to pickup and dropoff.",
                                            "question": "What flexibility is available for picking up and dropping off the RV?"
                                        }
                                    ],
                                    "locale": {
                                        "base_currency": "USD",
                                        "distance_unit": "miles",
                                        "length_unit": "feet",
                                        "liquid_unit": "gallons",
                                        "weight_unit": "lbs"
                                    },
                                    "location": {
                                        "city": "Belpre",
                                        "country": "US",
                                        "county": "",
                                        "lat": 39.273,
                                        "lng": -81.581,
                                        "state": "OH",
                                        "zip": "45741"
                                    },
                                    "mileage_usage_item_id": 408827,
                                    "minimum_days": 0,
                                    "minimum_deposit": 0,
                                    "name": "20MV4805 2020 Forest River Cherokee Grey Wolf 29TE",
                                    "nearby_content": [],
                                    "original_url": "",
                                    "owner_score": 0,
                                    "parent_id": 0,
                                    "position": 0,
                                    "preferred_primary_image": {
                                        "amenity": null,
                                        "best": false,
                                        "category": null,
                                        "description": "",
                                        "position": 0,
                                        "primary": false,
                                        "rental_id": 0,
                                        "review": null,
                                        "skip_enhance": false,
                                        "status": "",
                                        "tags": "",
                                        "url": "",
                                        "video": false
                                    },
                                    "prep_fee": {
                                        "amount": 5000,
                                        "description": "This fee will cover preparing and sanitizing the unit prior to each rental."
                                    },
                                    "presentment_currency": "USD",
                                    "price_per_day": 11000,
                                    "price_per_month": 267300,
                                    "price_per_week": 66000,
                                    "primary_image_url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726683/p/rentals/327614/images/bwymjwqmzeiloppe2cpu.jpg",
                                    "pro": false,
                                    "published": true,
                                    "ranking": {
                                        "distance_weight": {
                                            "control": 0.35,
                                            "test_1": 0.6,
                                            "test_2": 0.35,
                                            "test_3": 0.35
                                        },
                                        "distance_weight_prod": 0.35,
                                        "is_new_listing": 0,
                                        "model_name": "model_gbt_web_072522",
                                        "original_score": 0,
                                        "ranking_score": 0.5029,
                                        "ranking_score2": 0.6026,
                                        "ranking_score3": 0.5029
                                    },
                                    "rental_category": "rv",
                                    "rental_score": 0,
                                    "request_less_than_minimum_days": 7,
                                    "review_scores": {
                                        "bayesian_rating": 2.7837247246216017
                                    },
                                    "reviews_num": 3,
                                    "score": 5,
                                    "seatbelts": 0,
                                    "security_deposit": 50000,
                                    "seo_content": {
                                        "category": []
                                    },
                                    "settlement_currency": "USD",
                                    "sleeps": 10,
                                    "sleeps_adults": 0,
                                    "sleeps_kids": 0,
                                    "slug": "/rv-rental/belpre_oh/2022_forest-river_cherokee-grey-wolf_327614-listing",
                                    "smart_photo_score": 0,
                                    "sort_score": 3.3767374,
                                    "stay": null,
                                    "stay_catalog": null,
                                    "summary": "",
                                    "tags": [],
                                    "tax_rates": [],
                                    "type": "trailer",
                                    "unavailable": false,
                                    "updated": "0001-01-01T00:00:00Z",
                                    "use_day_pricing": false,
                                    "use_tax_inclusive_pricing": false,
                                    "user_slug": "",
                                    "vehicle_amps": 0,
                                    "vehicle_box_length": 0,
                                    "vehicle_class": "",
                                    "vehicle_dry_weight": 12539,
                                    "vehicle_gvwr": 7837,
                                    "vehicle_height": 0,
                                    "vehicle_length": 36,
                                    "vehicle_length_with_hitch": 0,
                                    "vehicle_license_plate_state": "OH",
                                    "vehicle_make": "Forest River",
                                    "vehicle_model": "Cherokee Grey Wolf",
                                    "vehicle_title": "2020 Forest River Cherokee Grey Wolf",
                                    "vehicle_width": 0,
                                    "vehicle_year": 2020
                                },
                                "relationships": {
                                    "images": {
                                        "data": [
                                            {
                                                "id": "2731989",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2719189",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731972",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731973",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731975",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731976",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731977",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731978",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731979",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731980",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731981",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731982",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731983",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731984",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731985",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731986",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731987",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731988",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731990",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731991",
                                                "type": "images"
                                            }
                                        ]
                                    },
                                    "mileage_usage_item": {
                                        "data": {
                                            "id": "408827",
                                            "type": "usage_based_item"
                                        }
                                    },
                                    "owner": {
                                        "data": {
                                            "id": "2726002",
                                            "type": "users"
                                        }
                                    },
                                    "primary_image": {
                                        "data": {
                                            "id": "2731989",
                                            "type": "images"
                                        }
                                    }
                                }
                            },
                            {
                                "id": "291345",
                                "type": "rentals",
                                "attributes": {
                                    "Explanation": null,
                                    "active_options": {
                                        "cancel_policy": "moderate",
                                        "cancel_policy_combo_bookings": "",
                                        "date": "2023-05-17",
                                        "instant_book": true,
                                        "minimum_days": 3,
                                        "monthly_discount_percentage": 9.9,
                                        "monthly_rate_per_day": 9450,
                                        "price_per_day": 10500,
                                        "price_per_month": 264600,
                                        "price_per_week": 66150,
                                        "tax": 0,
                                        "use_day_pricing": false,
                                        "use_tax_inclusive_pricing": false,
                                        "weekly_discount_percentage": 9.9,
                                        "weekly_rate_per_day": 9450
                                    },
                                    "availability_set": false,
                                    "average_ratings": {
                                        "cleanliness_score": 5,
                                        "cleanliness_score_percentage": 100,
                                        "communication_score": 5,
                                        "communication_score_percentage": 100,
                                        "listing_score": 5,
                                        "listing_score_percentage": 100,
                                        "mechanical_score": 5,
                                        "mechanical_score_percentage": 100,
                                        "score": 5,
                                        "score_percentage": 100,
                                        "value_score": 5,
                                        "value_score_percentage": 100
                                    },
                                    "average_reviews": {
                                        "owner": [],
                                        "rental": [],
                                        "score": 4.6
                                    },
                                    "cancel_policy": "moderate",
                                    "cancel_policy_combo_bookings": "",
                                    "cancel_text": "",
                                    "catalog": null,
                                    "check_in": 0,
                                    "check_out": 0,
                                    "children_count": 0,
                                    "coachnet_ready": true,
                                    "coachnet_required": false,
                                    "combined_special_hours": [],
                                    "created": "0001-01-01T00:00:00Z",
                                    "current_location_id": 0,
                                    "custom_insurance_text": "",
                                    "dealer": false,
                                    "delivery": true,
                                    "delivery_radius": 100,
                                    "delivery_usage_item_id": 358663,
                                    "deposit_percentage": 0,
                                    "description": "",
                                    "description_included": "Camper comes with all the following amenities:\n      \n    •     • Fresh linens\n    •     • Fresh towels/washcloths\n    •     • Keurig Coffee Maker\n    •     • Full set of pots/pans\n    •     • Set for 4 of dishes/cups/bowls/silverware\n    •     • Cooking utensils\n    •     • Cleaning supplies\n    •         ◦ Dish soap\n    •         ◦ Disinfectant wipes\n    •         ◦ Clorox cleaning wipes\n    •         ◦ Broom\n    •         ◦ Trash can/trash bags\n    •     • Some bug control materials\n    •     • Chain loaded tension hitch\n    •     • All connections including\n    •         ◦ Water hoses\n    •         ◦ Water pressure regulators\n    •         ◦ Power cords\n    •         ◦ Adapters\n    •         ◦ Sewage drain hoses\n      \n      We like to say that all you need to bring with you is your clothing and food (and adults beverages if that suits your needs) :-)",
                                    "description_other": "Please be very careful with the awing and be sure to hit the retract button when bringing it in.  Over extending the awning is a great way to bend the traction arms and this is an $1,800 fix.  You would be surprised how often this happens.  Also suggest you bring in the awning during higher winds to avoid any damage; rain is ok, wind is not.  ABSOLUTELY NO SMOKING IN THE CAMPER but pets are certainly welcome.",
                                    "description_recommendations": "",
                                    "display_vehicle_type": "Travel trailer",
                                    "distributed_ratings": {
                                        "score": {
                                            "r1": 0,
                                            "r2": 0,
                                            "r3": 0,
                                            "r4": 0,
                                            "r5": 100
                                        }
                                    },
                                    "education": [],
                                    "external": false,
                                    "favorite": false,
                                    "favorite_count": 29,
                                    "features": {
                                        "air_conditioner": true,
                                        "audio_inputs": true,
                                        "awning": true,
                                        "backup_camera": false,
                                        "base_weight": 5401,
                                        "beds_bunk": 2,
                                        "beds_dinette_conversion": 1,
                                        "beds_fold_out_sofa": 1,
                                        "beds_full": 0,
                                        "beds_king": 0,
                                        "beds_other": null,
                                        "beds_queen": 1,
                                        "beds_twin": 0,
                                        "bike_rack": false,
                                        "brake_controller": false,
                                        "burning_man_friendly": true,
                                        "carrying_capacity": 1199,
                                        "cd_player": true,
                                        "ceiling_fan": false,
                                        "connector_type": null,
                                        "dining_table": true,
                                        "extra_storage": false,
                                        "festival_friendly": true,
                                        "generator": false,
                                        "gray_tank": 39,
                                        "gross_vehicle_weight": 0,
                                        "handicap_accessible": false,
                                        "heater": true,
                                        "hitch_weight": 900,
                                        "hookup_electric": true,
                                        "hookup_sewer": true,
                                        "hookup_water": true,
                                        "hot_water_tank": false,
                                        "inside_shower": true,
                                        "international_travel_allowed": false,
                                        "inverter": false,
                                        "kitchen_sink": true,
                                        "leveling_jacks": false,
                                        "microwave": true,
                                        "minimum_age": 0,
                                        "mpg": 0,
                                        "one_way_rentals": false,
                                        "outside_shower": false,
                                        "oven": true,
                                        "pet_friendly": true,
                                        "propane_tank": 9,
                                        "provides_receivers": false,
                                        "radio": true,
                                        "refrigerator": true,
                                        "satellite": false,
                                        "sewage_tank": 28,
                                        "skylight": false,
                                        "slide_outs": 1,
                                        "smoking_allowed": false,
                                        "solar": false,
                                        "stove": true,
                                        "tailgate_friendly": true,
                                        "toilet": true,
                                        "tow_hitch": true,
                                        "trailer_weight": 7400,
                                        "tv_dvd": true,
                                        "washer_dryer": false,
                                        "water_tank": 52,
                                        "wifi": false
                                    },
                                    "first_published": "2022-04-08T15:08:53.406322-07:00",
                                    "generator_usage_item_id": 0,
                                    "group_on_map": true,
                                    "group_reviews_num": 0,
                                    "group_reviews_score": 0,
                                    "group_score": 0,
                                    "has_been_published": true,
                                    "has_checkout_questions": false,
                                    "hidden": false,
                                    "host_notes": "",
                                    "house_rules": "",
                                    "instant_book": true,
                                    "instant_book_leeway": 1,
                                    "insurance_coverage": "",
                                    "insurance_eligible": true,
                                    "insurance_plan": {
                                        "id": 97,
                                        "label": "Outdoorsy Towable Protection",
                                        "renter_body": "",
                                        "renter_headline": "",
                                        "requires_driver_verification": false
                                    },
                                    "insurance_renter_adjustable": false,
                                    "insurance_state": "approved",
                                    "last_published": "2022-04-08T15:35:16.632746-07:00",
                                    "listing_questions": [],
                                    "locale": {
                                        "base_currency": "USD",
                                        "distance_unit": "miles",
                                        "length_unit": "feet",
                                        "liquid_unit": "gallons",
                                        "weight_unit": "lbs"
                                    },
                                    "location": {
                                        "city": "Belpre",
                                        "country": "US",
                                        "county": "",
                                        "lat": 39.273,
                                        "lng": -81.581,
                                        "state": "OH",
                                        "zip": "45714"
                                    },
                                    "mileage_usage_item_id": 358664,
                                    "minimum_days": 0,
                                    "minimum_deposit": 0,
                                    "name": "Perfect Family Travel Trailer",
                                    "nearby_content": [],
                                    "original_url": "",
                                    "owner_score": 0,
                                    "parent_id": 0,
                                    "position": 0,
                                    "preferred_primary_image": {
                                        "amenity": null,
                                        "best": false,
                                        "category": null,
                                        "description": "",
                                        "position": 0,
                                        "primary": false,
                                        "rental_id": 0,
                                        "review": null,
                                        "skip_enhance": false,
                                        "status": "",
                                        "tags": "",
                                        "url": "",
                                        "video": false
                                    },
                                    "prep_fee": {
                                        "amount": 5000,
                                        "description": "This fee will cover professional cleaning and required maintenance checks."
                                    },
                                    "presentment_currency": "USD",
                                    "price_per_day": 10500,
                                    "price_per_month": 255150,
                                    "price_per_week": 63000,
                                    "primary_image_url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454451/undefined/rentals/291345/images/vrbtguzep20gqwfkcuwe.jpg",
                                    "pro": false,
                                    "published": true,
                                    "ranking": {
                                        "distance_weight": {
                                            "control": 0.35,
                                            "test_1": 0.6,
                                            "test_2": 0.35,
                                            "test_3": 0.35
                                        },
                                        "distance_weight_prod": 0.35,
                                        "is_new_listing": 0,
                                        "model_name": "model_gbt_web_072522",
                                        "original_score": 0,
                                        "ranking_score": 0.4446,
                                        "ranking_score2": 0.4119,
                                        "ranking_score3": 0.4446
                                    },
                                    "rental_category": "rv",
                                    "rental_score": 0,
                                    "request_less_than_minimum_days": 3,
                                    "review_scores": {
                                        "bayesian_rating": 2.9909846077038775
                                    },
                                    "reviews_num": 4,
                                    "score": 5,
                                    "seatbelts": 0,
                                    "security_deposit": 50000,
                                    "seo_content": {
                                        "category": []
                                    },
                                    "settlement_currency": "USD",
                                    "sleeps": 9,
                                    "sleeps_adults": 0,
                                    "sleeps_kids": 0,
                                    "slug": "/rv-rental/belpre_oh_united-states/2015_dutchmen_kodiak_291345-listing",
                                    "smart_photo_score": 0,
                                    "sort_score": 3.1833234,
                                    "stay": null,
                                    "stay_catalog": null,
                                    "summary": "",
                                    "tags": [],
                                    "tax_rates": [],
                                    "type": "trailer",
                                    "unavailable": false,
                                    "updated": "0001-01-01T00:00:00Z",
                                    "use_day_pricing": false,
                                    "use_tax_inclusive_pricing": false,
                                    "user_slug": "",
                                    "vehicle_amps": 0,
                                    "vehicle_box_length": 0,
                                    "vehicle_class": "",
                                    "vehicle_dry_weight": 5401,
                                    "vehicle_gvwr": 6600,
                                    "vehicle_height": 0,
                                    "vehicle_length": 32,
                                    "vehicle_length_with_hitch": 0,
                                    "vehicle_license_plate_state": "OH",
                                    "vehicle_make": "Dutchmen",
                                    "vehicle_model": "Kodiak",
                                    "vehicle_title": "2015 Dutchmen Kodiak",
                                    "vehicle_width": 0,
                                    "vehicle_year": 2015
                                },
                                "relationships": {
                                    "images": {
                                        "data": [
                                            {
                                                "id": "2404047",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404048",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404049",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404050",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404051",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404052",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404053",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404054",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404055",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404056",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404057",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404058",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404059",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404060",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404061",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404062",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404063",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404064",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404065",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404066",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404067",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404068",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404069",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404070",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404071",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404072",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404073",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2404204",
                                                "type": "images"
                                            }
                                        ]
                                    },
                                    "mileage_usage_item": {
                                        "data": {
                                            "id": "358664",
                                            "type": "usage_based_item"
                                        }
                                    },
                                    "owner": {
                                        "data": {
                                            "id": "2726002",
                                            "type": "users"
                                        }
                                    },
                                    "primary_image": {
                                        "data": {
                                            "id": "2404047",
                                            "type": "images"
                                        }
                                    }
                                }
                            },
                            {
                                "id": "327610",
                                "type": "rentals",
                                "attributes": {
                                    "Explanation": null,
                                    "active_options": {
                                        "cancel_policy": "moderate",
                                        "cancel_policy_combo_bookings": "",
                                        "date": "2023-05-17",
                                        "instant_book": false,
                                        "minimum_days": 3,
                                        "monthly_discount_percentage": 25,
                                        "monthly_rate_per_day": 9000,
                                        "price_per_day": 12000,
                                        "price_per_month": 252000,
                                        "price_per_week": 75600,
                                        "tax": 0,
                                        "use_day_pricing": false,
                                        "use_tax_inclusive_pricing": false,
                                        "weekly_discount_percentage": 9.9,
                                        "weekly_rate_per_day": 10800
                                    },
                                    "availability_set": false,
                                    "average_ratings": {
                                        "cleanliness_score": 0,
                                        "cleanliness_score_percentage": 0,
                                        "communication_score": 5,
                                        "communication_score_percentage": 100,
                                        "listing_score": 0,
                                        "listing_score_percentage": 0,
                                        "mechanical_score": 0,
                                        "mechanical_score_percentage": 0,
                                        "score": 5,
                                        "score_percentage": 100,
                                        "value_score": 0,
                                        "value_score_percentage": 0
                                    },
                                    "average_reviews": null,
                                    "cancel_policy": "moderate",
                                    "cancel_policy_combo_bookings": "",
                                    "cancel_text": "",
                                    "catalog": null,
                                    "check_in": 0,
                                    "check_out": 0,
                                    "children_count": 0,
                                    "coachnet_ready": true,
                                    "coachnet_required": false,
                                    "combined_special_hours": [],
                                    "created": "0001-01-01T00:00:00Z",
                                    "current_location_id": 0,
                                    "custom_insurance_text": "",
                                    "dealer": false,
                                    "delivery": true,
                                    "delivery_radius": 100,
                                    "delivery_usage_item_id": 408823,
                                    "deposit_percentage": 0,
                                    "description": "",
                                    "description_included": "Camper comes with all the following amenities:\n      \n    •     • Fresh linens\n    •     • Fresh towels/washcloths\n    •     • Keurig Coffee Maker\n    •     • Full set of pots/pans\n    •     • Set for 4 of dishes/cups/bowls/silverware\n    •     • Cooking utensils\n    •     • Cleaning supplies\n    •         ◦ Dish soap\n    •         ◦ Disinfectant wipes\n    •         ◦ Clorox cleaning wipes\n    •         ◦ Broom\n    •         ◦ Trash can/trash bags\n    •     • Some bug control materials\n    •     • Chain loaded tension hitch\n    •     • All connections including\n    •         ◦ Water hoses\n    •         ◦ Water pressure regulators\n    •         ◦ Power cords\n    •         ◦ Adapters\n    •         ◦ Sewage drain hoses\n      \n      We like to say that all you need to bring with you is your clothing and food (and adults beverages if that suits your needs) :-)",
                                    "description_other": "Please be very careful with the awing and be sure to hit the retract button when bringing it in.  Over extending the awning is a great way to bend the traction arms and this is an $1,800 fix.  You would be surprised how often this happens.  Also suggest you bring in the awning during higher winds to avoid any damage; rain is ok, wind is not.  ABSOLUTELY NO SMOKING IN THE CAMPER but pets are certainly welcome.",
                                    "description_recommendations": "",
                                    "display_vehicle_type": "Travel trailer",
                                    "distributed_ratings": {
                                        "score": {
                                            "r1": 0,
                                            "r2": 0,
                                            "r3": 0,
                                            "r4": 0,
                                            "r5": 100
                                        }
                                    },
                                    "education": [],
                                    "external": false,
                                    "favorite": false,
                                    "favorite_count": 10,
                                    "features": {
                                        "air_conditioner": true,
                                        "audio_inputs": true,
                                        "awning": true,
                                        "backup_camera": false,
                                        "base_weight": 12539,
                                        "beds_bunk": null,
                                        "beds_dinette_conversion": 1,
                                        "beds_fold_out_sofa": 1,
                                        "beds_full": 2,
                                        "beds_king": 0,
                                        "beds_other": null,
                                        "beds_queen": 1,
                                        "beds_twin": 0,
                                        "bike_rack": false,
                                        "brake_controller": true,
                                        "burning_man_friendly": true,
                                        "carrying_capacity": 2961,
                                        "cd_player": true,
                                        "ceiling_fan": true,
                                        "connector_type": "7pin",
                                        "dining_table": true,
                                        "extra_storage": true,
                                        "festival_friendly": true,
                                        "generator": false,
                                        "gray_tank": 76,
                                        "gross_vehicle_weight": 0,
                                        "handicap_accessible": false,
                                        "heater": true,
                                        "hitch_weight": 725,
                                        "hookup_electric": true,
                                        "hookup_sewer": true,
                                        "hookup_water": true,
                                        "hot_water_tank": false,
                                        "inside_shower": true,
                                        "international_travel_allowed": false,
                                        "inverter": false,
                                        "kitchen_sink": true,
                                        "leveling_jacks": true,
                                        "microwave": true,
                                        "minimum_age": 0,
                                        "mpg": 0,
                                        "one_way_rentals": false,
                                        "outside_shower": true,
                                        "oven": true,
                                        "pet_friendly": true,
                                        "propane_tank": 14,
                                        "provides_receivers": true,
                                        "radio": true,
                                        "refrigerator": true,
                                        "satellite": false,
                                        "sewage_tank": 38,
                                        "skylight": true,
                                        "slide_outs": 3,
                                        "smoking_allowed": false,
                                        "solar": false,
                                        "stove": true,
                                        "tailgate_friendly": true,
                                        "toilet": true,
                                        "tow_hitch": false,
                                        "trailer_weight": 7725,
                                        "tv_dvd": true,
                                        "washer_dryer": false,
                                        "water_tank": 64,
                                        "wifi": false
                                    },
                                    "first_published": "2022-09-11T08:02:12.567037-07:00",
                                    "generator_usage_item_id": 0,
                                    "group_on_map": true,
                                    "group_reviews_num": 0,
                                    "group_reviews_score": 0,
                                    "group_score": 0,
                                    "has_been_published": true,
                                    "has_checkout_questions": false,
                                    "hidden": false,
                                    "host_notes": "",
                                    "house_rules": "",
                                    "instant_book": false,
                                    "instant_book_leeway": 0,
                                    "insurance_coverage": "",
                                    "insurance_eligible": true,
                                    "insurance_plan": {
                                        "id": 97,
                                        "label": "Outdoorsy Towable Protection",
                                        "renter_body": "",
                                        "renter_headline": "",
                                        "requires_driver_verification": false
                                    },
                                    "insurance_renter_adjustable": false,
                                    "insurance_state": "approved",
                                    "last_published": "2022-09-11T08:02:12.567003-07:00",
                                    "listing_questions": [],
                                    "locale": {
                                        "base_currency": "USD",
                                        "distance_unit": "miles",
                                        "length_unit": "feet",
                                        "liquid_unit": "gallons",
                                        "weight_unit": "lbs"
                                    },
                                    "location": {
                                        "city": "Belpre",
                                        "country": "US",
                                        "county": "",
                                        "lat": 39.273,
                                        "lng": -81.581,
                                        "state": "OH",
                                        "zip": "45714"
                                    },
                                    "mileage_usage_item_id": 408824,
                                    "minimum_days": 0,
                                    "minimum_deposit": 0,
                                    "name": "22MV2931 2022 Forest River Cherokee Grey Wolf 26DBH",
                                    "nearby_content": [],
                                    "original_url": "",
                                    "owner_score": 0,
                                    "parent_id": 0,
                                    "position": 0,
                                    "preferred_primary_image": {
                                        "amenity": null,
                                        "best": false,
                                        "category": null,
                                        "description": "",
                                        "position": 0,
                                        "primary": false,
                                        "rental_id": 0,
                                        "review": null,
                                        "skip_enhance": false,
                                        "status": "",
                                        "tags": "",
                                        "url": "",
                                        "video": false
                                    },
                                    "prep_fee": {
                                        "amount": 5000,
                                        "description": "This fee will cover preparing and sanitizing the unit prior to each rental."
                                    },
                                    "presentment_currency": "USD",
                                    "price_per_day": 12000,
                                    "price_per_month": 291600,
                                    "price_per_week": 72000,
                                    "primary_image_url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724894/p/rentals/327610/images/ya401rdotgwn9h8cuvyh.jpg",
                                    "pro": false,
                                    "published": true,
                                    "ranking": {
                                        "distance_weight": {
                                            "control": 0.35,
                                            "test_1": 0.6,
                                            "test_2": 0.35,
                                            "test_3": 0.35
                                        },
                                        "distance_weight_prod": 0.35,
                                        "is_new_listing": 0,
                                        "model_name": "model_gbt_web_072522",
                                        "original_score": 0,
                                        "ranking_score": 0.3444,
                                        "ranking_score2": 0.4469,
                                        "ranking_score3": 0.3444
                                    },
                                    "rental_category": "rv",
                                    "rental_score": 0,
                                    "request_less_than_minimum_days": 7,
                                    "review_scores": {
                                        "bayesian_rating": 2.229018732900877
                                    },
                                    "reviews_num": 1,
                                    "score": 5,
                                    "seatbelts": 0,
                                    "security_deposit": 50000,
                                    "seo_content": {
                                        "category": []
                                    },
                                    "settlement_currency": "USD",
                                    "sleeps": 9,
                                    "sleeps_adults": 0,
                                    "sleeps_kids": 0,
                                    "slug": "/rv-rental/belpre_oh/2022_forest-river_cherokee-grey-wolf_327610-listing",
                                    "smart_photo_score": 0,
                                    "sort_score": 2.8509035,
                                    "stay": null,
                                    "stay_catalog": null,
                                    "summary": "",
                                    "tags": [],
                                    "tax_rates": [],
                                    "type": "trailer",
                                    "unavailable": false,
                                    "updated": "0001-01-01T00:00:00Z",
                                    "use_day_pricing": false,
                                    "use_tax_inclusive_pricing": false,
                                    "user_slug": "",
                                    "vehicle_amps": 0,
                                    "vehicle_box_length": 0,
                                    "vehicle_class": "",
                                    "vehicle_dry_weight": 12539,
                                    "vehicle_gvwr": 7725,
                                    "vehicle_height": 0,
                                    "vehicle_length": 31,
                                    "vehicle_length_with_hitch": 0,
                                    "vehicle_license_plate_state": "OH",
                                    "vehicle_make": "Forest River",
                                    "vehicle_model": "Cherokee Grey Wolf",
                                    "vehicle_title": "2022 Forest River Cherokee Grey Wolf",
                                    "vehicle_width": 0,
                                    "vehicle_year": 2022
                                },
                                "relationships": {
                                    "images": {
                                        "data": [
                                            {
                                                "id": "2731921",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2719185",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731917",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731918",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731919",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731920",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731922",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731923",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731924",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731925",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731926",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731927",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731929",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731930",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731931",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731932",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731933",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731934",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2731935",
                                                "type": "images"
                                            }
                                        ]
                                    },
                                    "mileage_usage_item": {
                                        "data": {
                                            "id": "408824",
                                            "type": "usage_based_item"
                                        }
                                    },
                                    "owner": {
                                        "data": {
                                            "id": "2726002",
                                            "type": "users"
                                        }
                                    },
                                    "primary_image": {
                                        "data": {
                                            "id": "2731921",
                                            "type": "images"
                                        }
                                    }
                                }
                            },
                            {
                                "id": "356587",
                                "type": "rentals",
                                "attributes": {
                                    "Explanation": null,
                                    "active_options": {
                                        "cancel_policy": "flexible",
                                        "cancel_policy_combo_bookings": "",
                                        "date": "2023-05-17",
                                        "instant_book": false,
                                        "minimum_days": 2,
                                        "monthly_discount_percentage": 11.3,
                                        "monthly_rate_per_day": 9663,
                                        "price_per_day": 10900,
                                        "price_per_month": 270560,
                                        "price_per_week": 72270,
                                        "tax": 0,
                                        "use_day_pricing": false,
                                        "use_tax_inclusive_pricing": false,
                                        "weekly_discount_percentage": 5.2,
                                        "weekly_rate_per_day": 10325
                                    },
                                    "availability_set": false,
                                    "average_ratings": null,
                                    "average_reviews": null,
                                    "cancel_policy": "flexible",
                                    "cancel_policy_combo_bookings": "",
                                    "cancel_text": "",
                                    "catalog": null,
                                    "check_in": 0,
                                    "check_out": 0,
                                    "children_count": 0,
                                    "coachnet_ready": true,
                                    "coachnet_required": false,
                                    "combined_special_hours": [],
                                    "created": "0001-01-01T00:00:00Z",
                                    "current_location_id": 0,
                                    "custom_insurance_text": "",
                                    "dealer": false,
                                    "delivery": true,
                                    "delivery_radius": 35,
                                    "delivery_usage_item_id": 448650,
                                    "deposit_percentage": 0,
                                    "description": "",
                                    "description_included": "",
                                    "description_other": "Delivery & Setup Only\nNo pickup option\n",
                                    "description_recommendations": "",
                                    "display_vehicle_type": "Travel trailer",
                                    "distributed_ratings": null,
                                    "education": [],
                                    "external": false,
                                    "favorite": false,
                                    "favorite_count": 0,
                                    "features": {
                                        "air_conditioner": true,
                                        "audio_inputs": true,
                                        "awning": true,
                                        "backup_camera": false,
                                        "beds_bunk": null,
                                        "beds_dinette_conversion": 1,
                                        "beds_fold_out_sofa": 2,
                                        "beds_full": 0,
                                        "beds_king": 0,
                                        "beds_other": 1,
                                        "beds_queen": 2,
                                        "beds_twin": 0,
                                        "bike_rack": false,
                                        "brake_controller": false,
                                        "burning_man_friendly": false,
                                        "cd_player": true,
                                        "ceiling_fan": true,
                                        "connector_type": null,
                                        "dining_table": true,
                                        "extra_storage": true,
                                        "festival_friendly": false,
                                        "generator": false,
                                        "gray_tank": 0,
                                        "handicap_accessible": false,
                                        "heater": true,
                                        "hitch_weight": 0,
                                        "hookup_electric": true,
                                        "hookup_sewer": true,
                                        "hookup_water": true,
                                        "hot_water_tank": false,
                                        "inside_shower": true,
                                        "international_travel_allowed": false,
                                        "inverter": false,
                                        "kitchen_sink": true,
                                        "leveling_jacks": true,
                                        "microwave": true,
                                        "minimum_age": 0,
                                        "mpg": 0,
                                        "one_way_rentals": false,
                                        "outside_shower": false,
                                        "oven": true,
                                        "pet_friendly": false,
                                        "propane_tank": 0,
                                        "provides_receivers": false,
                                        "radio": true,
                                        "refrigerator": true,
                                        "satellite": false,
                                        "sewage_tank": 0,
                                        "skylight": true,
                                        "slide_outs": 0,
                                        "smoking_allowed": false,
                                        "solar": false,
                                        "stove": true,
                                        "tailgate_friendly": false,
                                        "toilet": true,
                                        "tow_hitch": false,
                                        "trailer_weight": 1875,
                                        "tv_dvd": true,
                                        "washer_dryer": false,
                                        "water_tank": 0,
                                        "wifi": false
                                    },
                                    "first_published": "2023-04-25T07:53:08.884077-07:00",
                                    "generator_usage_item_id": 0,
                                    "group_on_map": false,
                                    "group_reviews_num": 0,
                                    "group_reviews_score": 0,
                                    "group_score": 0,
                                    "has_been_published": true,
                                    "has_checkout_questions": false,
                                    "hidden": false,
                                    "host_notes": "",
                                    "house_rules": "",
                                    "instant_book": false,
                                    "instant_book_leeway": 0,
                                    "insurance_coverage": "",
                                    "insurance_eligible": true,
                                    "insurance_plan": {
                                        "id": 97,
                                        "label": "Outdoorsy Towable Protection",
                                        "renter_body": "",
                                        "renter_headline": "",
                                        "requires_driver_verification": false
                                    },
                                    "insurance_renter_adjustable": false,
                                    "insurance_state": "approved",
                                    "last_published": "2023-04-25T07:53:08.884034-07:00",
                                    "listing_questions": [],
                                    "locale": {
                                        "base_currency": "USD",
                                        "distance_unit": "miles",
                                        "length_unit": "feet",
                                        "liquid_unit": "gallons",
                                        "weight_unit": "lbs"
                                    },
                                    "location": {
                                        "city": "Flatwoods",
                                        "country": "US",
                                        "county": "",
                                        "lat": 38.507,
                                        "lng": -82.721,
                                        "state": "KY",
                                        "zip": "41139"
                                    },
                                    "mileage_usage_item_id": 448651,
                                    "minimum_days": 0,
                                    "minimum_deposit": 0,
                                    "name": "Nice - 2019 Jayco Jay Flight SLX",
                                    "nearby_content": [],
                                    "original_url": "",
                                    "owner_score": 0,
                                    "parent_id": 0,
                                    "position": 0,
                                    "preferred_primary_image": {
                                        "amenity": null,
                                        "best": false,
                                        "category": null,
                                        "description": "",
                                        "position": 0,
                                        "primary": false,
                                        "rental_id": 0,
                                        "review": null,
                                        "skip_enhance": false,
                                        "status": "",
                                        "tags": "",
                                        "url": "",
                                        "video": false
                                    },
                                    "prep_fee": null,
                                    "presentment_currency": "USD",
                                    "price_per_day": 10900,
                                    "price_per_month": 279270,
                                    "price_per_week": 69400,
                                    "primary_image_url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429406/p/rentals/356587/images/tydotjzk66x8fxfelajx.png",
                                    "pro": false,
                                    "published": true,
                                    "ranking": {
                                        "distance_weight": {
                                            "control": 0.35,
                                            "test_1": 0.6,
                                            "test_2": 0.35,
                                            "test_3": 0.35
                                        },
                                        "distance_weight_prod": 0.35,
                                        "is_new_listing": 0,
                                        "model_name": "model_gbt_web_072522",
                                        "original_score": 0,
                                        "ranking_score": 0.4999,
                                        "ranking_score2": 0.7401,
                                        "ranking_score3": 0.4999
                                    },
                                    "rental_category": "rv",
                                    "rental_score": 0,
                                    "request_less_than_minimum_days": 0,
                                    "review_scores": null,
                                    "reviews_num": 0,
                                    "score": 0,
                                    "seatbelts": 0,
                                    "security_deposit": 50000,
                                    "seo_content": {
                                        "category": []
                                    },
                                    "settlement_currency": "USD",
                                    "sleeps": 6,
                                    "sleeps_adults": 0,
                                    "sleeps_kids": 0,
                                    "slug": "/rv-rental/flatwoods_ky/2019_jayco_jay-flight-slx_356587-listing",
                                    "smart_photo_score": 0,
                                    "sort_score": 2.7128794,
                                    "stay": null,
                                    "stay_catalog": null,
                                    "summary": "",
                                    "tags": [],
                                    "tax_rates": [],
                                    "type": "trailer",
                                    "unavailable": false,
                                    "updated": "0001-01-01T00:00:00Z",
                                    "use_day_pricing": false,
                                    "use_tax_inclusive_pricing": false,
                                    "user_slug": "",
                                    "vehicle_amps": 0,
                                    "vehicle_box_length": 0,
                                    "vehicle_class": "",
                                    "vehicle_dry_weight": 0,
                                    "vehicle_gvwr": 0,
                                    "vehicle_height": 0,
                                    "vehicle_length": 30,
                                    "vehicle_length_with_hitch": 0,
                                    "vehicle_license_plate_state": "KY",
                                    "vehicle_make": "Jayco",
                                    "vehicle_model": "Jay Flight SLX",
                                    "vehicle_title": "2019 Jayco Jay Flight SLX",
                                    "vehicle_width": 0,
                                    "vehicle_year": 2019
                                },
                                "relationships": {
                                    "images": {
                                        "data": [
                                            {
                                                "id": "2990910",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990907",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990908",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990909",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990911",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990912",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990913",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990914",
                                                "type": "images"
                                            },
                                            {
                                                "id": "2990915",
                                                "type": "images"
                                            }
                                        ]
                                    },
                                    "mileage_usage_item": {
                                        "data": {
                                            "id": "448651",
                                            "type": "usage_based_item"
                                        }
                                    },
                                    "owner": {
                                        "data": {
                                            "id": "3373923",
                                            "type": "users"
                                        }
                                    },
                                    "primary_image": {
                                        "data": {
                                            "id": "2990910",
                                            "type": "images"
                                        }
                                    }
                                }
                            }
                        ],
                        "included": [
                            {
                                "id": "2732010",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 1,
                                    "primary": true,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727196/p/rentals/327967/images/iohyufqwjz083genesd5.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2722146",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 2,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663084996/p/rentals/327967/images/rvxckmypunid4ov8anxr.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731997",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 3,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727189/p/rentals/327967/images/wpl3olimgie3l1sxpye2.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731998",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 4,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727190/p/rentals/327967/images/nitrscn42gohy80ilavs.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731999",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 5,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727182/p/rentals/327967/images/loryqdp6zxtc1iobckqa.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732000",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 6,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727183/p/rentals/327967/images/ql2rw5oqge19rhjfzxbs.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732001",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 7,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727190/p/rentals/327967/images/kajkuisnmzt0bz393fiv.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732002",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 8,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727184/p/rentals/327967/images/kdv15hgcnc5fugq6v4t7.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732003",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 9,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727186/p/rentals/327967/images/guwovduq28wthpadwvbc.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732004",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 10,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727188/p/rentals/327967/images/ifyyt8gbdpnogvtb4n2t.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732005",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 11,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727190/p/rentals/327967/images/lebyumsoywon2ww2rpwc.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732006",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 12,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727190/p/rentals/327967/images/y3myjigo4fstajskwpk5.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732007",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 13,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727196/p/rentals/327967/images/sx5x1zjztmeczb2c9ewf.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732008",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 14,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727197/p/rentals/327967/images/mi66ooqhp4uxnhfr3wqi.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732009",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 15,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727196/p/rentals/327967/images/vxcvmacifapmjljilksy.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732011",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 16,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727198/p/rentals/327967/images/nvafwvufiwffmrirclvo.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2732012",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 17,
                                    "primary": false,
                                    "rental_id": 327967,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663727198/p/rentals/327967/images/vaaau9hpxgf5manaqqxa.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731989",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 1,
                                    "primary": true,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726683/p/rentals/327614/images/bwymjwqmzeiloppe2cpu.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2719189",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 2,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1662908921/p/rentals/327614/images/djfzgukkgrzq4wpwdxtx.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731972",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 3,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726668/p/rentals/327614/images/zv2o1epidxc0glqn2mw9.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731973",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 4,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726667/p/rentals/327614/images/yu4cdrlez7ostt7ljptj.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731975",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 5,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726669/p/rentals/327614/images/hb9m6pjoux6ps84zr8lo.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731976",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 6,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726673/p/rentals/327614/images/czfhnuzrmxrmybnj4wim.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731977",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 7,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726672/p/rentals/327614/images/nibsmicfe5hwfqqy920r.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731978",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 8,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726670/p/rentals/327614/images/jk4cj1iznt7rgvbn4cxf.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731979",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 9,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726674/p/rentals/327614/images/f7dykce1jmqaaanruomf.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731980",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 10,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726675/p/rentals/327614/images/rixpg52b5nrqfntvrrjw.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731981",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 11,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726674/p/rentals/327614/images/k86qcdm86evxx1dbpuxl.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731982",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 12,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726675/p/rentals/327614/images/dbklxjqrvikhc3hbi8xp.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731983",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 13,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726677/p/rentals/327614/images/dpkonuwu3glqrqymtd55.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731984",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 14,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726680/p/rentals/327614/images/ahvscw6e9tflcx5khaeg.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731985",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 15,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726680/p/rentals/327614/images/ihnyezfwzbpjkhcy50dk.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731986",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 16,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726679/p/rentals/327614/images/oxa1zwbb1shhylr0yukg.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731987",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 17,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726681/p/rentals/327614/images/fh7epltmrzpyuhi66yhp.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731988",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 18,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726680/p/rentals/327614/images/kpxgvzakpsdj0tkuhdrm.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731990",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 19,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726684/p/rentals/327614/images/aaxuud4wqai0kztpvj12.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731991",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 20,
                                    "primary": false,
                                    "rental_id": 327614,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663726685/p/rentals/327614/images/vd1cucfe9auhxffkrvmy.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404047",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 1,
                                    "primary": true,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454451/undefined/rentals/291345/images/vrbtguzep20gqwfkcuwe.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404048",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "exterior"
                                    },
                                    "description": "",
                                    "position": 2,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454465/undefined/rentals/291345/images/qdfpryafdmqj7d6qbjtz.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404049",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "exterior"
                                    },
                                    "description": "",
                                    "position": 3,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454474/undefined/rentals/291345/images/zw5njlx6bckj7gwwcnda.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404050",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "exterior"
                                    },
                                    "description": "",
                                    "position": 4,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454489/undefined/rentals/291345/images/xll97wcquravfk6r6kg8.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404051",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "exterior"
                                    },
                                    "description": "",
                                    "position": 5,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454498/undefined/rentals/291345/images/tzukkhnaecwjcstkp2xc.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404052",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "exterior"
                                    },
                                    "description": "",
                                    "position": 6,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454520/undefined/rentals/291345/images/iigty8qkmxp65vrls0qw.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404053",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "bedroom"
                                    },
                                    "description": "",
                                    "position": 7,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454535/undefined/rentals/291345/images/jeesiimdn9zoyzcn8zgt.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404054",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "bedroom"
                                    },
                                    "description": "",
                                    "position": 8,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454549/undefined/rentals/291345/images/mmqiwnrnbcnaldo7o4zn.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404055",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "bedroom"
                                    },
                                    "description": "",
                                    "position": 9,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454558/undefined/rentals/291345/images/do3qjohogxinf1zlcwpx.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404056",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "bedroom"
                                    },
                                    "description": "",
                                    "position": 10,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454569/undefined/rentals/291345/images/gynaviqksou3tl514hnv.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404057",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "bathroom"
                                    },
                                    "description": "",
                                    "position": 11,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454580/undefined/rentals/291345/images/ejjshfkzbu9qiw3rbcxq.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404058",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "bathroom"
                                    },
                                    "description": "",
                                    "position": 12,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454591/undefined/rentals/291345/images/iahy7jr713fdypoxuwtb.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404059",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "dining"
                                    },
                                    "description": "",
                                    "position": 13,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "pending",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454601/undefined/rentals/291345/images/c2pml76e2vxarxl1ewr9.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404060",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 14,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454613/undefined/rentals/291345/images/eynpj9qg64y2ovgjkqu6.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404061",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 15,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454630/undefined/rentals/291345/images/t2g5uae2fmfxjq4f9chs.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404062",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 16,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454639/undefined/rentals/291345/images/nwrgywv9qxprn6igxnrn.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404063",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 17,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454651/undefined/rentals/291345/images/pkpcbzjmmpzd1xzpmbpi.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404064",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 18,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454659/undefined/rentals/291345/images/qdqss6gbopnzcxowpmrs.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404065",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 19,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454667/undefined/rentals/291345/images/mqqh9astmusnpurtu0ix.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404066",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "kitchen"
                                    },
                                    "description": "",
                                    "position": 20,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454682/undefined/rentals/291345/images/tvpncrtfow9xmp4aivj0.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404067",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "kitchen"
                                    },
                                    "description": "",
                                    "position": 21,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454691/undefined/rentals/291345/images/qzgbkdvvsrmdfcllmcug.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404068",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "kitchen"
                                    },
                                    "description": "",
                                    "position": 22,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454705/undefined/rentals/291345/images/snhrqzgixcaucbsgig5t.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404069",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "kitchen"
                                    },
                                    "description": "",
                                    "position": 23,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454713/undefined/rentals/291345/images/nviyx6hqizjpkbxlzrfs.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404070",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "kitchen"
                                    },
                                    "description": "",
                                    "position": 24,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454726/undefined/rentals/291345/images/anvwojialz0swzgtqjma.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404071",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 25,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454735/undefined/rentals/291345/images/ffdwlatfokvaj69rds2k.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404072",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "travel"
                                    },
                                    "description": "",
                                    "position": 26,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454745/undefined/rentals/291345/images/wjkuq1zlkhoyuuuawttp.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404073",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "travel"
                                    },
                                    "description": "",
                                    "position": 27,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649454753/undefined/rentals/291345/images/png8ralsc1fiynlzcxyn.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2404204",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "floorplan"
                                    },
                                    "description": "",
                                    "position": 28,
                                    "primary": false,
                                    "rental_id": 291345,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1649462186/undefined/rentals/291345/images/idqbspp3zz6p7rql4asr.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731921",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 1,
                                    "primary": true,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724894/p/rentals/327610/images/ya401rdotgwn9h8cuvyh.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2719185",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 2,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1662908501/p/rentals/327610/images/fib6fh1tjfzmfbskrpft.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731917",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 3,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724883/p/rentals/327610/images/grqgvyg6idosyqvkbv2j.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731918",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 4,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724886/p/rentals/327610/images/fex1bcbjopnrmnyxocix.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731919",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 5,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724888/p/rentals/327610/images/vonahugswpqy7cmh55cz.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731920",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 6,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724894/p/rentals/327610/images/o0kmjqogymxlivmtxwdh.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731922",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 7,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724892/p/rentals/327610/images/okfls1tk28kblggxm7b9.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731923",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 8,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724894/p/rentals/327610/images/ivhckrv8euzdyibwfkcc.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731924",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 9,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724894/p/rentals/327610/images/kq7xzddypgvjjnbbpssc.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731925",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 10,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724894/p/rentals/327610/images/puwg8qadqahrppljp74o.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731926",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 11,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724896/p/rentals/327610/images/kznliizdld9xwgsyuxlg.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731927",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 12,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724903/p/rentals/327610/images/cdgb3ts2ke0zgjdyywxp.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731929",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 13,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724900/p/rentals/327610/images/nhmtjlbkn69dnzq3jewr.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731930",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 14,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724900/p/rentals/327610/images/zlv7qisya3znmofsin9y.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731931",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 15,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724902/p/rentals/327610/images/c13uv3twqx43t24hq1u4.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731932",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 16,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724903/p/rentals/327610/images/g5i5mgmnm5qnwyri4ckz.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731933",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 17,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724886/p/rentals/327610/images/njwbcfn6mauw94h508hu.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731934",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 18,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724886/p/rentals/327610/images/w399haouhzmyezqfswr7.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2731935",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 19,
                                    "primary": false,
                                    "rental_id": 327610,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1663724887/p/rentals/327610/images/muidvaoh2ozhxbtnbl6c.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990910",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 1,
                                    "primary": true,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429406/p/rentals/356587/images/tydotjzk66x8fxfelajx.png",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990907",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 2,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429406/p/rentals/356587/images/gmfmbrrtldfl0mcttreo.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990908",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 3,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429406/p/rentals/356587/images/woijmrf8ararwvvjdsvl.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990909",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 4,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429406/p/rentals/356587/images/t3ehg4vmskvuwqp7mfzh.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990911",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 5,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429406/p/rentals/356587/images/quekqrf8mjsozagnw8c2.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990912",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 6,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429407/p/rentals/356587/images/grqjntzlexklcipqvto9.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990913",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 7,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429407/p/rentals/356587/images/twa3jlg5pfzavpoggs15.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990914",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 8,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429407/p/rentals/356587/images/g4ybvntl2eaerzk9sxhh.jpg",
                                    "video": false
                                }
                            },
                            {
                                "id": "2990915",
                                "type": "images",
                                "attributes": {
                                    "amenity": null,
                                    "best": false,
                                    "category": {
                                        "name": "",
                                        "slug": "other"
                                    },
                                    "description": "",
                                    "position": 9,
                                    "primary": false,
                                    "rental_id": 356587,
                                    "review": null,
                                    "skip_enhance": false,
                                    "status": "approved",
                                    "tags": "",
                                    "url": "https://res.cloudinary.com/outdoorsy/image/upload/v1682429407/p/rentals/356587/images/qretilpqkh07t1uay4eg.jpg",
                                    "video": false
                                }
                            }
                        ],
                        "meta": {
                            "radius": 100,
                            "lat": 38.8086,
                            "lng": -81.7029,
                            "city": "Ripley",
                            "state": "WV",
                            "country": "US",
                            "country_code": "US",
                            "country_name": "United States",
                            "total": 27,
                            "total_unavailable": 0,
                            "start_position": 1,
                            "stop_position": 5,
                            "price_max": 15000,
                            "price_min": 3500,
                            "price_average": 12274,
                            "price_median": 12500,
                            "price_histogram": {
                                "data": [
                                    0,
                                    0,
                                    0,
                                    1,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    1,
                                    2,
                                    3,
                                    9,
                                    7,
                                    2,
                                    2,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0
                                ],
                                "max_value": 50000
                            },
                            "vehicle_types": [
                                {
                                    "type": "a",
                                    "label": "Class A",
                                    "style": "drivable"
                                },
                                {
                                    "type": "camper-van",
                                    "label": "Camper van",
                                    "style": "drivable"
                                },
                                {
                                    "type": "fifth-wheel",
                                    "label": "Fifth-wheel",
                                    "style": "towable"
                                },
                                {
                                    "type": "tow-vehicle",
                                    "label": "Tow Vehicle",
                                    "style": "drivable"
                                },
                                {
                                    "type": "toy-hauler",
                                    "label": "Toy hauler",
                                    "style": "towable"
                                },
                                {
                                    "type": "b",
                                    "label": "Class B",
                                    "style": "drivable"
                                },
                                {
                                    "type": "c",
                                    "label": "Class C",
                                    "style": "drivable"
                                },
                                {
                                    "type": "folding-trailer",
                                    "label": "Folding trailer",
                                    "style": "towable"
                                },
                                {
                                    "type": "other",
                                    "label": "Other",
                                    "style": "both"
                                },
                                {
                                    "type": "trailer",
                                    "label": "Travel trailer",
                                    "style": "towable"
                                },
                                {
                                    "type": "truck-camper",
                                    "label": "Truck Camper",
                                    "style": "drivable"
                                },
                                {
                                    "type": "utility-trailer",
                                    "label": "Utility Trailer",
                                    "style": "towable"
                                }
                            ],
                            "locale": "en-us",
                            "suggested": false,
                            "experiments": {},
                            "experiments_data": {},
                            "request": {},
                            "FlexibleDates": null,
                            "is_blended": false
                        },
                        "suggestions": null

                }
            }
        ]
    }
}

export default meta;
type Story = StoryObj<typeof SearchListings>

export const Idk: Story = {}