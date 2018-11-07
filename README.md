# benEATS

## Things (nouns) in our business domain.

> Modeling our business domain

Restaurants

- name
- location/address
- price range
- categories

Category

- name
- restaurants

Reviews

- restaurant
- user
- rating
- message

User

- name
- avatar

### Nice to have

Comments on restaurant and/or reviews

## Actions

> Mapping URLS to actions that interact with that model.

NOTE: All users are visitors, but not all visitors are users.

- [x] Visitors can search for restaurants
- [ ] Visitors can read reviews for restaurants
- [ ] Visitors can become Users by signing up.
- [ ] Users can write reviews for restaurants
- [ ] User can write reviews that only include a rating

* [x] Admins can add restaurants
* [x] Admins can add categories
* [ ] Admins can moderate reviews
