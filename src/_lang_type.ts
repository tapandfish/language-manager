export type LangFile = {title :string, menus :{fishing :string, become_fisher :string, learn :string, signin :string, signup :string, account :string, create_event :string, search_event :string}, footer :{about_us :string, how_it_works :string, blog :string, contacts :string}, ctas :{become_host :{text :string, button :string}, boat_owner :{text :string, button :string}, book_now :{text :string, button :string}, insurance_banner :{text :string, button :string}, discover_estimate :{text :string, button :string}, first_time :{text :string, button :string}}, contacts :{title :string, headline :string, description :string, form :{full_name :string, phone :string, email :string, message :string, send :string}, privacy_notice :string}, forms :{name :string, surname :string, email :string, emailconfirmation :string, password :string, passwordConfirmation :string, nameError :string, surnameError :string, emailError :string, emailUsed :string, emailConfirmationError :string, passwordError :string, passwordConfirmationError :string, acceptTerms :string, acceptTermsError :string, signupUnknownError :string, signupSuccess :string, signinUnknownError :string, signinError :string, recoverUnknownError :string, recoverSuccess :string, changePropic :string, changePropicDescription :string, changePropicUnknownError :string, changePropicSizeError :string, changePropicRatioError :string, changePropicFormatError :string, chooseFile :string, browse :string, close :string, saveChanges :string, oldPasswordError :string, date_from :string, date_to :string, search :string, upload :string, full_name :string, preferred_name :string, optional :string, name_tooltip :string, hint :string, drag_n_drop :string, propicNeedsVerified :string, usernameUsed :string, pick_date :string, location :string}, signup :string, signin :string, verification :{success :string, already_done :string, error :string}, user :{title :string, verification :{banner :string, sendButton :string, sent :string, sendError :string}, menu :{dashboard :string, management :string, security :string, billing :string, reviews :string, alerts :string, logout :string, create_event :string, published_events :string}, tabs :{manage :{email :{title :string, yourEmail :string, variousEmailsCheckbox :string, importantEmailsCheckbox :string, emailDisclaimer :string, button :string, success :string, extremeError :string, subtitle :string}, info :{title :string, subtitle :string, success :string, extremeError :string, host :{username :string, full_name :string, full_name_hint :string, languages :string, phone :string, description :string, username_placeholder :string, full_name_placeholder :string, description_placeholder :string, phone_hint :string, username_hint :string, username_error :string}}, propic :{title :string, subtitle :string}}, sessions :{title :string, description :string, reload :string, thisDevice :string, noLocation :string, revoked :string, extremeError :string}, security :{password :{title :string, error :string, success :string, old_password :string, new_password :string, confirm_password :string, button :string, wrong_password :string}}, published_events :{title :string, subtitle :string, no_events :string, card :{draft :string, admin_review :string, edit :string, view :string, active :string, inactive :string, change_status :string}}, create_event :{navigation :{previous :string, next :string, create :string, menu :{info :string, media :string, fishing :string, description :string, availability :string}}, info :{title :string, name_label :string, name_placeholder :string, boat_label :string, boat_placeholder :string, yes :string, no :string, boat_info :string, category :string, categories :{FISHING :string, FISHING_SEA :string, FISHING_EAT :string, FISHING_tooltip :string, FISHING_SEA_tooltip :string, FISHING_EAT_tooltip :string}, activities_label :string, activities :{SNORKELING :string, DOLPHINS_WHALES :string, TRIP :string}, add_new_boat :string, location_label :string, location_placeholder :string, boat_name_label :string, boat_name_placeholder :string, boat_name_tooltip :string}, media :{upload_images :string, no_image_error :string, remove_tooltip :string}, guide_for_host :string, fishing :{title :string, SEA :string, RIVER_LAKE :string, sea_techniques :{SPEARFISHING :string, SURF_CASTING :string, SPINNING :string, BEACH_LEDGERING :string, JIGGING :string, LIVE_TROLLING :string, COASTAL_TROLLING :string, OFFSHORE_TROLLING :string, TUNA_FISHING :string, BOAT_FISHING :string, STREET_FISHING :string, KAYAK_FISHING :string}, river_lake_techniques :{RIVER_TROUT_SALMON :string, LAKE_TROUT_SALMON :string, SPINNING :string, CARPFISHING :string, FLYFISHING :string, RIVER_GENERIC :string, LAKE_GENERIC :string}, services_label :string, services :{SERVICE1 :string, SERVICE2 :string, SERVICE3 :string, SERVICE4 :string, SERVICE5 :string, SERVICE6 :string}}, description :{title :string, placeholder :string}, availability :{price_title :string, total_price :string, price_placeholder :string, max_people :string, max_people_placeholder :string, availability :string, specific :{menu :string, title :string, description :string, details :string}, weekly :{menu :string, title :string, description :string, details :string}, custom :{menu :string, title :string, description :string, details :string}, expenses :string, price_per_person :string, expenses_placeholder :string, price_per_person_placeholder :string, expenses_tooltip :string, price_per_person_tooltip :string}, extreme_error :string}, reviews :{received :{title :string, subtitle :string}}}, revert :{title :string, invalid :string, description :string, unknownError :string, button :string}, profile_completion :string, upgrade :{to_host :{message :string, button :string, page :{title :string, subtitle :string, type_choice :string, private :string, private_tooltip :string, professional :string, professional_tooltip :string}}, to_ambassador :{button :string, action :string}}}, pages :{recover :{title :string, description :string, error :string, success :string, button :string, resetDescription :string}, signin :{forgot_password :string, no_account :string, title :string, subtitle :string, create_account :string}, home :{discover :{header :string, action :string, description :string}, fullscreen :{header :string, description :string, location :string, date :string, search :string}, icons :{meet :string, fish :string, share :string, book :string}, host_description :{private :{title :string, description :string}, professional :{title :string, description :string}}, image_gallery :{pre_header :string, header :string, action :string}, parallax :string, post_gallery :{pre_header :string, header :string, action :string}}, about :{title :string, header :string, description :string, action :string, guest :{description :string, list :Array<string>}, host :{description :string, list :Array<string>}, parallax :string, ambassadors :string}, gofishing :{title :string, header :string, question :string, description :string, hosts :{question :string, private :{description :string, list :Array<string>}, professional :{description :string, list :Array<string>}}, users_say :string}, howitworks :{title :string, guest :{nav :string, list :Array<{name? :string, content? :string, list? :Array<string>}>}, host :{nav :string, list :Array<{name? :string, content? :string}>}}, becomehost :{title :string, header :string, for_privates :string, for_professionals :string, card :{start :string, header :string, where :string, technique :string, sea :string, river_lake :string, food_fishing :string, publish :string}, icons :Array<{title? :string, content? :string}>, wanna_join :string, hosts :{private :{description :string, list :Array<string>}, professional :{description :string, list :Array<string>}}, advantages :Array<{name? :string, data? :Array<{title? :string, content? :string}>}>, tabs :{header :string, publish :{nav :string, header :string, content :string, image_alt :string}, price :{nav :string, header :string, content :string, image_alt :string}, meet :{nav :string, header :string, content :string, image_alt :string}}, ambassador :{header :string, advantages :string, list :Array<{title? :string, content? :string}>}}, signup :{title :string, subtitle :string, already_registered :string, login :string}}, cards :{ambassador :{badge :string, reviews :string, users :string, experiences :string, worldwide :string}, event :{badge :string, reviews :string, starting_price :string, max_people :string, technique :string}}, seo :{home :{title :string, header :{}, description :string}, signin :{title :string, header :string, description :string}, signup :{title :string, header :string, description :string}, user :{title :string, header :string, description :string}, user_become_host :{header :string}, about :{title :string, header :string, description :string}, become_host :{title :string, header :string, description :string}, blog :{title :string, header :string, description :string}, contacts :{title :string, header :string, description :string}, go_fishing :{title :string, header :string, description :string}, how_it_works :{title :string, header :string, description :string}, recover :{title :string, header :string, description :string}, revert :{title :string, header :string, description :string}, search :{title :string, header :string, description :string}}, boat :{form :{kind_placeholder :string, length_placeholder :string, motorization_placeholder :string}, kind :string, length :string, equipment :string, equipments :{GPS :string, DEPTH_SOUNDER :string, VHF :string, RADAR :string, SHOWER :string, KITCHEN :string, SUNDECK :string, TOILET :string, ICEBOX :string, FRIDGE :string}, motorization :string}, weekdays :{MONDAY :string, TUESDAY :string, WEDNESDAY :string, THURSDAY :string, FRIDAY :string, SATURDAY :string, SUNDAY :string, short :{MONDAY :string, TUESDAY :string, WEDNESDAY :string, THURSDAY :string, FRIDAY :string, SATURDAY :string, SUNDAY :string}}, units :{horse_power :string}, event :{details :string, boat :string, information :string, other_from_host :string, reviews :string, explore_others :string, host :{title :string, professional :string, private :string, no_reviews :string}, boat_info :string, error :{title :string, check_link :string}, see_all_pictures :string, book :{date_book :string, n_people :string, cost :string, cost_per_person :string, total :string, book :string}, banners :{draft :{content :string, edit :string, publish :string, confirmation :{title :string, message :string, cancel :string, publish :string}}, review :{content :string, edit :string}, public :{content :string, manage :string}}, no_location :string}, search :{location :string, n_people :string, more_filters :string, search :string, results :string, no_results :string, modal :{title :string, radius :string, price_range :string, languages :string, categories :string, any :string, technique :string, close :string, save :string}}, current :string}