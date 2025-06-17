import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "77013",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d62fa6fe-c0a4-4a0f-a191-6bc58b8d7a72_77013.JPG",
      locality: "Adalath Circle",
      areaName: "Hanamakonda",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 23:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!"
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png"
                }
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/kfc-adalath-circle-hanamakonda-rest77013",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "435820",
      name: "Paradise Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/6f0ff292-b7b4-442b-b7bb-5b3212f8c3f0_435820.jpg",
      locality: "Shastri Nagar",
      areaName: "Hanamakonda",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Hyderabadi"],
      avgRating: 4.2,
      parentId: "700",
      avgRatingString: "4.2",
      totalRatingsString: "7.4K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/paradise-biryani-shastri-nagar-hanamakonda-rest435820",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "606548",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/d4117e38-df07-427a-af47-90dfa6965628_606548.jpg",
      locality: "Mandi",
      areaName: "Mandi Bazar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      parentId: "7003",
      avgRatingString: "4.3",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 23:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/cakezone-patisserie-mandi-mandi-bazar-rest606548",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "375101",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/e355aa6b-bc56-4d39-ac2b-a657033916c2_375101.JPG",
      locality: "Kumrapally",
      areaName: "Hanamakonda",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "4.8K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 23:45:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!"
          },
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png"
                }
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/kwality-walls-ice-cream-and-more-kumrapally-hanamakonda-rest375101",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "380325",
      name: "Ibaco",
      cloudinaryImageId: "xirovh7pitqyc0ioj1co",
      locality: "Kazipet Main Road",
      areaName: "Hanamakonda",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.4,
      veg: true,
      parentId: "3481",
      avgRatingString: "4.4",
      totalRatingsString: "489",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 22:30:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/ibaco-kazipet-main-road-hanamakonda-rest380325",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "463811",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/5e2dd2d5-90ab-449c-8232-27559a221dad_463811.JPG",
      locality: "Ramakrishna Colony",
      areaName: "Hanamakonda",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 22:45:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/the-belgian-waffle-co-ramakrishna-colony-hanamakonda-rest463811",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "820742",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/c3855f14-454d-46fb-911a-6ac171210d5c_820742.JPG",
      locality: "Hanamakonda",
      areaName: "Kaddi complex",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.4,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.4",
      totalRatingsString: "260",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 23:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!"
          },
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png"
                }
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/baskin-robbins-ice-cream-desserts-hanamakonda-kaddi-complex-rest820742",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "268621",
      name: "Cream Stone Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/ba54fb7f-0cfe-4a01-85b0-dcda0b9cca15_268621.jpg",
      locality: "Nakkalgutta",
      areaName: "Hanamkonda",
      costForTwo: "₹370 for two",
      cuisines: ["Ice Cream", "Desserts", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "538712",
      avgRatingString: "4.6",
      totalRatingsString: "9.9K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!"
          }
        ]
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/cream-stone-ice-cream-nakkalgutta-hanamkonda-rest268621",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "826618",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e77822ad-4e01-4a38-ae6b-f50cd19352dd_826618.JPG",
      locality: "Fathima Nagar",
      areaName: "Hanamkonda",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 4,
      parentId: "306806",
      avgRatingString: "4.0",
      totalRatingsString: "216",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-06-17 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹66 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-23d9043c-42e0-4df3-b921-766c7df5cdf1"
    },
    cta: {
      link:
        "https://www.swiggy.com/city/warangal/pastas-by-pizza-hut-fathima-nagar-hanamkonda-rest826618",
      type: "WEBLINK"
    }
  }
];

console.log(resList);
const RestaurentCard = props => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    locality,
    areaName
  } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        } // Using template literals to construct the image URL"
        alt="Restaurant"
      />
      <h3 className="res-name">
        {name}
      </h3>
      <h4>
        <span className="res-cuisine">
          Cuisine: {cuisines.join(", ")}
        </span>
      </h4>
      <span className="res-rating">
        Rating : {avgRating}
      </span>
      <h4 />
      <h4>
        <span className="res-cost">
          Cost per 2 person: {costForTwo}
        </span>
      </h4>
      <h4>
        <span className="res-delivery-time">
          Delivery Time: {sla.deliveryTime} mins
        </span>
      </h4>
      <h4>
        <span className="res-locality">
          Locality: {locality}, {areaName}
        </span>
      </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map(restaurant =>
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        )}
      </div>
    </div>
  );
};

const Footer = props => {
  const { year, companyName } = props;
  return (
    <div className="footer">
      <p className="footer-text">
        © {year} {companyName}
      </p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer year={2025} companyName="Online Food Delivery" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
