btnChangePin.addEventListener("click", async (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.id &&
    +inputClosePin.value === currentAccount.pin
  ) {
    currentAccount.pin = inputNewpin.value;

    setTimeout(function () {
      // Add movement
      changePin.innerHTML = "PIN Changed";

      const dataCurrent = {
        pin: currentAccount.pin,
      };
      console.log(dataCurrent);

      patchData(
        `http://localhost:3000/accounts/${currentAccount.id}`,
        dataCurrent
      );

      // window.location.replace(
      //   `http://localhost:3000/accounts/${currentAccount.id}`
      // );
      //////////////////////////////////////////
      // currentAccount.pin = inputNewpin.value;
      // const dataPinCurrent = inputNewpin.value;

      // const dataCurrent = {
      //   id: currentAccount.id,
      //   owner: currentAccount.owner,
      //   iban: currentAccount.iban,
      //   movements: currentAccount.movements,
      //   interestRate: currentAccount.interestRate,
      //   pin: `${dataPinCurrent}`,
      //   movementsDates: currentAccount.movementsDates,
      //   currency: currentAccount.currency,
      //   locale: currentAccount.locale,
      // };

      // putData(
      //   `http://localhost:3000/accounts/${currentAccount.id}`,
      //   dataCurrent
      // );
      /////////////////////////////////////////////
      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  } else {
    setTimeout(function () {
      changePin.innerHTML = "Only Acount Owner can change PIN";
    }, 2500);
  }

  inputUserChange.value = inputPinChange.value = inputNewPin.value = "";
});
