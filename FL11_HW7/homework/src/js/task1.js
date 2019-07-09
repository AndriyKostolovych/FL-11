// Your code goes here
let eMail=prompt('Please, enter Your E-mail');
let adminPassword = 'AdminPass';
let userPassword = 'UserPass';
let eLength = 6;
let passLength = 5;

	if(!eMail){
		// якщо пуста строка або відміна
		alert('Canceled.');
	}else{
		//якщо менше 6 символів
		if(eMail.length<eLength){
			alert('I dont know any emails having name length less than 6 symbols');

		}else if(eMail==='user@gmail.com'||eMail==='admin@gmail.com'){

			//якщо ввели один з коректних емейлів
			let enterPassword = prompt('Please enter Your password');
				if(!enterPassword){
					//якщо пароль пуста строка або відіна
					alert('Canceled.');
				}else{
					switch(eMail){
						case 'user@gmail.com':
							if(enterPassword === userPassword){
								//пропонуємо змінити пароль
								if(confirm('Do you want to change your password?')){
									//прохання ввести старий пароль
									if(userPassword === prompt('Write Your old password')){
										let newUserPassword = prompt('Enter new password');
											if(newUserPassword){
													//якщо довжина пароля менша 5 символів
													if(newUserPassword.length <= passLength){
														alert('It’s too short password. Sorry')
													}else{
														// якщо пароль більше 5 символів, просимо повторити пароль
														let repeatNewUserPassword = prompt('Enter new password again');
														//перевірка чи старий і новий паролі збігаються
														if(newUserPassword === repeatNewUserPassword){
															alert('You have successfully changed your password');
														}else{
															// якщо паролі не збігаються
															alert('You wrote the wrong password.');
														}
													}
											}else{
												alert('You have failed the change');
											}		
									}else{
										// відбій або пусти пароль при вводі старого
										alert('You have failed the change');
									}
								}else{
									// якщо не захотіли міняти пароль
									alert('You have failed the change'); 
								}
							}else{
								//якщо пароль при вході був введений не правильно
								alert('wrong password')
							}
							break;

							// якщо ввели почту Адміна
						case 'admin@gmail.com':
							if(enterPassword===adminPassword){
								//пропонуємо змінити пароль
								if(confirm('Do you want to change your password?')){
									//прохання ввести старий пароль
									if(adminPassword===prompt('Write Your old password')){
										let newAdminPassword = prompt('Enter new password');
											if(newAdminPassword){
													//якщо довжина пароля менша 5 символів
													if(newAdminPassword.length<=passLength){
														alert('It’s too short password. Sorry')
													}else{
														// якщо пароль більше 5 символів, просимо повторити пароль
														let repeatNewAdminPassword=prompt('Enter new password again');
														//перевірка чи старий і новий паролі збігаються
														if(newAdminPassword===repeatNewAdminPassword){
															alert('You have successfully changed your password');
														}else{
															// якщо паролі не збігаються
															alert('You wrote the wrong password.');
														}
													}
												}else{
													alert('You have failed the change')
												}
									}else{
										// відбій або пусти пароль при вводі старого
										alert('You have failed the change');
									}
								}else{
									// якщо не захотіли міняти пароль
									alert('You have failed the change');
								}
							}else{
								//якщо пароль при вході був введений не правильно
								alert('wrong password')
							}
							break;
						default:
						alert('I dont know you');
						break;	
					}
				}
		}else{
			//якщо емейл був невідомий
			alert('I dont know you');
		}
	}



	
