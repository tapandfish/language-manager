export type LangFile = {title :string, menus :{fishing :string, become_fisher :string, learn :string, signin :string, signup :string, account :string, create_event :string}, footer :{about_us :string, how_it_works :string, blog :string, contacts :string}, ctas :{become_host :{text :string, button :string}, boat_owner :{text :string, button :string}, book_now :{text :string, button :string}, insurance_banner :{text :string, button :string}, discover_estimate :{text :string, button :string}, first_time :{text :string, button :string}}, contacts :{title :string, headline :string, description :string, form :{full_name :string, phone :string, email :string, message :string, send :string}, privacy_notice :string}, forms :{name :string, surname :string, email :string, emailconfirmation :string, password :string, passwordConfirmation :string, nameError :string, surnameError :string, emailError :string, emailUsed :string, emailConfirmationError :string, passwordError :string, passwordConfirmationError :string, acceptTerms :string, acceptTermsError :string, signupUnknownError :string, signupSuccess :string, signinUnknownError :string, signinError :string, recoverUnknownError :string, recoverSuccess :string, changePropic :string, changePropicDescription :string, changePropicUnknownError :string, changePropicSizeError :string, changePropicRatioError :string, changePropicFormatError :string, chooseFile :string, browse :string, close :string, saveChanges :string, oldPasswordError :string, date_from :string, date_to :string, search :string, upload :string}, signup :string, signin :string, verification :{success :string, already_done :string, error :string}, user :{title :string, verification :{banner :string, sendButton :string, sent :string, sendError :string}, menu :{details :string, events :string, security :string, payment :string, boats :string, logout :string}, tabs :{info :{title :string, yourEmail :string, variousEmailsCheckbox :string, importantEmailsCheckbox :string, emailDisclaimer :string, button :string, success :string, extremeError :string}, sessions :{title :string, description :string, reload :string, thisDevice :string, noLocation :string, revoked :string, extremeError :string}}, revert :{title :string, invalid :string, description :string, unknownError :string, button :string}}, pages :{recover :{title :string, description :string, error :string, success :string, button :string, resetDescription :string}, signin :{forgot_password :string}, home :{discover :{header :string, action :string, description :string}, fullscreen :{header :string, description :string, location :string, date :string, search :string}, icons :{meet :string, fish :string, share :string}, host_description :{private :{title :string, description :string}, professional :{title :string, description :string}}, image_gallery :{pre_header :string, header :string, action :string}, parallax :string, post_gallery :{pre_header :string, header :string, action :string}}, about :{title :string, header :string, description :string, action :string, guest :{description :string, list :Array<{0? :string, 1? :string, 2? :string, 3? :string, 4? :string, 5? :string, 6? :string, 7? :string, 8? :string, 9? :string, 10? :string, 11? :string, 12? :string, 13? :string, 14? :string, 15? :string, 16? :string, 17? :string, 18? :string, 19? :string, 20? :string, 21? :string, 22? :string, 23? :string, 24? :string, 25? :string, 26? :string, 27? :string, 28? :string, 29? :string, 30? :string, 31? :string, 32? :string, 33? :string, 34? :string, 35? :string, 36? :string, 37? :string, 38? :string, 39? :string, 40? :string, 41? :string, 42? :string, 43? :string, 44? :string, 45? :string, 46? :string, 47? :string, 48? :string, 49? :string, 50? :string, 51? :string, 52? :string, 53? :string, 54? :string, 55? :string, 56? :string, 57? :string, 58? :string, 59? :string, 60? :string, 61? :string, 62? :string, 63? :string, 64? :string, 65? :string, 66? :string, 67? :string, 68? :string, 69? :string, 70? :string, 71? :string, 72? :string, 73? :string, 74? :string, 75? :string, 76? :string, 77? :string, 78? :string, 79? :string, 80? :string, 81? :string, 82? :string, 83? :string, 84? :string, 85? :string, 86? :string, 87? :string, 88? :string, 89? :string, 90? :string, 91? :string, 92? :string, 93? :string, 94? :string, 95? :string, 96? :string, 97? :string, 98? :string, 99? :string, 100? :string, 101? :string, 102? :string, 103? :string, 104? :string}>}, host :{description :string, list :Array<{0? :string, 1? :string, 2? :string, 3? :string, 4? :string, 5? :string, 6? :string, 7? :string, 8? :string, 9? :string, 10? :string, 11? :string, 12? :string, 13? :string, 14? :string, 15? :string, 16? :string, 17? :string, 18? :string, 19? :string, 20? :string, 21? :string, 22? :string, 23? :string, 24? :string, 25? :string, 26? :string, 27? :string, 28? :string, 29? :string, 30? :string, 31? :string, 32? :string, 33? :string, 34? :string, 35? :string, 36? :string, 37? :string, 38? :string, 39? :string, 40? :string, 41? :string, 42? :string, 43? :string, 44? :string, 45? :string, 46? :string, 47? :string, 48? :string, 49? :string, 50? :string, 51? :string, 52? :string, 53? :string, 54? :string, 55? :string, 56? :string, 57? :string, 58? :string, 59? :string, 60? :string, 61? :string, 62? :string, 63? :string, 64? :string, 65? :string, 66? :string, 67? :string, 68? :string, 69? :string, 70? :string, 71? :string, 72? :string, 73? :string, 74? :string, 75? :string, 76? :string, 77? :string, 78? :string, 79? :string, 80? :string, 81? :string, 82? :string, 83? :string, 84? :string, 85? :string, 86? :string, 87? :string, 88? :string, 89? :string, 90? :string, 91? :string, 92? :string, 93? :string, 94? :string, 95? :string, 96? :string, 97? :string, 98? :string, 99? :string, 100? :string, 101? :string, 102? :string, 103? :string, 104? :string, 105? :string, 106? :string, 107? :string, 108? :string, 109? :string, 110? :string}>}, parallax :string, ambassadors :string}, gofishing :{title :string, header :string, question :string, description :string, hosts :{question :string, private :{description :string, list :Array<{0? :string, 1? :string, 2? :string, 3? :string, 4? :string, 5? :string, 6? :string, 7? :string, 8? :string, 9? :string, 10? :string, 11? :string, 12? :string, 13? :string, 14? :string, 15? :string, 16? :string, 17? :string, 18? :string, 19? :string, 20? :string, 21? :string, 22? :string, 23? :string, 24? :string, 25? :string, 26? :string, 27? :string, 28? :string, 29? :string, 30? :string, 31? :string, 32? :string, 33? :string, 34? :string, 35? :string, 36? :string, 37? :string, 38? :string, 39? :string, 40? :string, 41? :string, 42? :string, 43? :string, 44? :string, 45? :string, 46? :string, 47? :string, 48? :string, 49? :string, 50? :string, 51? :string, 52? :string, 53? :string, 54? :string, 55? :string, 56? :string, 57? :string, 58? :string, 59? :string, 60? :string, 61? :string, 62? :string, 63? :string, 64? :string, 65? :string, 66? :string, 67? :string, 68? :string, 69? :string, 70? :string, 71? :string, 72? :string, 73? :string, 74? :string, 75? :string, 76? :string, 77? :string, 78? :string, 79? :string, 80? :string, 81? :string, 82? :string, 83? :string, 84? :string, 85? :string, 86? :string, 87? :string, 88? :string, 89? :string, 90? :string, 91? :string, 92? :string, 93? :string, 94? :string, 95? :string, 96? :string, 97? :string, 98? :string, 99? :string, 100? :string, 101? :string, 102? :string, 103? :string, 104? :string, 105? :string, 106? :string, 107? :string, 108? :string, 109? :string, 110? :string, 111? :string, 112? :string, 113? :string, 114? :string, 115? :string, 116? :string, 117? :string, 118? :string, 119? :string}>}, professional :{description :string, list :Array<{0? :string, 1? :string, 2? :string, 3? :string, 4? :string, 5? :string, 6? :string, 7? :string, 8? :string, 9? :string, 10? :string, 11? :string, 12? :string, 13? :string, 14? :string, 15? :string, 16? :string, 17? :string, 18? :string, 19? :string, 20? :string, 21? :string, 22? :string, 23? :string, 24? :string, 25? :string, 26? :string, 27? :string, 28? :string, 29? :string, 30? :string, 31? :string, 32? :string, 33? :string, 34? :string, 35? :string, 36? :string, 37? :string, 38? :string, 39? :string, 40? :string, 41? :string, 42? :string, 43? :string, 44? :string, 45? :string, 46? :string, 47? :string, 48? :string, 49? :string, 50? :string, 51? :string, 52? :string, 53? :string, 54? :string, 55? :string, 56? :string, 57? :string, 58? :string, 59? :string, 60? :string, 61? :string, 62? :string, 63? :string, 64? :string, 65? :string, 66? :string, 67? :string, 68? :string, 69? :string, 70? :string, 71? :string, 72? :string, 73? :string, 74? :string, 75? :string, 76? :string, 77? :string, 78? :string, 79? :string, 80? :string, 81? :string, 82? :string, 83? :string, 84? :string, 85? :string, 86? :string, 87? :string, 88? :string, 89? :string, 90? :string, 91? :string, 92? :string, 93? :string, 94? :string, 95? :string, 96? :string, 97? :string, 98? :string, 99? :string, 100? :string, 101? :string, 102? :string, 103? :string, 104? :string, 105? :string, 106? :string, 107? :string, 108? :string, 109? :string}>}}, users_say :string}, howitworks :{title :string, guest :{nav :string, list :Array<{name? :string, content? :string, list? :Array<{0? :string, 1? :string, 2? :string, 3? :string, 4? :string, 5? :string, 6? :string, 7? :string, 8? :string, 9? :string, 10? :string, 11? :string, 12? :string, 13? :string, 14? :string, 15? :string, 16? :string, 17? :string, 18? :string, 19? :string, 20? :string, 21? :string, 22? :string, 23? :string, 24? :string, 25? :string, 26? :string, 27? :string, 28? :string, 29? :string, 30? :string, 31? :string, 32? :string, 33? :string, 34? :string, 35? :string, 36? :string, 37? :string, 38? :string, 39? :string, 40? :string, 41? :string, 42? :string, 43? :string, 44? :string, 45? :string, 46? :string, 47? :string, 48? :string, 49? :string, 50? :string, 51? :string, 52? :string, 53? :string, 54? :string, 55? :string, 56? :string, 57? :string, 58? :string, 59? :string, 60? :string, 61? :string, 62? :string, 63? :string, 64? :string, 65? :string, 66? :string, 67? :string, 68? :string, 69? :string, 70? :string, 71? :string, 72? :string, 73? :string, 74? :string, 75? :string, 76? :string, 77? :string, 78? :string, 79? :string, 80? :string, 81? :string, 82? :string, 83? :string, 84? :string, 85? :string, 86? :string, 87? :string, 88? :string, 89? :string, 90? :string, 91? :string, 92? :string, 93? :string, 94? :string, 95? :string, 96? :string, 97? :string, 98? :string, 99? :string, 100? :string, 101? :string, 102? :string}>}>}, host :{nav :string, list :Array<{name? :string, content? :string}>}}}, cards :{ambassador :{badge :string, reviews :string, users :string, experiences :string, worldwide :string}}, test :Array<{0? :string, 1? :string, 2? :string}>, current :string}