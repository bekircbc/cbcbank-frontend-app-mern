btnTransfer.addEventListener("click", async (e) => {
  e.preventDefault();
  // Verifiy den Nutzer zuerst bevor wir etwas anders machen
  let userInfo = JSON.parse(localStorage.getItem("currentUser"));
  let isVerified = verifyUser(userInfo);
  if (isVerified === false) return; // wennn er nicht existiert dann darf er nicht weiter

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find((acc) => {
    if (
      acc.owner === inputTransferTo.value &&
      acc.iban === inputTransferiban.value
    )
      return acc;
  });
  inputTransferAmount.value =
    inputTransferTo.value =
    inputTransferiban.value =
      "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.owner !== currentAccount.owner
  ) {
    // Doing the transfer
    ////////////////////////////////////////

    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());

    const dataCurrent = {
      movements: currentAccount.movements,
      movementsDates: currentAccount.movementsDates,
    };

    console.log(dataCurrent);

    const dataReceiver = {
      movements: receiverAcc.movements,
      movementsDates: receiverAcc.movementsDates,
    };
    console.log(dataCurrent);

    patchData(
      `http://localhost:3000/accounts/${currentAccount.id}`,
      dataCurrent
    );
    patchData(`http://localhost:3000/accounts/${receiverAcc.id}`, dataReceiver);

    // currentAccount.movements.push(-amount);
    // receiverAcc.movements.push(amount);
    moneyTransfer.innerHTML = `${amount} ${
      currentAccount.currency === "EUR" ? "€" : "$"
    } has tranferred to ${receiverAcc.owner}`;

    // Add transfer date
    // currentAccount.movementsDates.push(new Date().toISOString());
    // receiverAcc.movementsDates.push(new Date().toISOString());
    //////////////////////////////////////////////////////////////
    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  } else {
    moneyTransfer.innerHTML = `${amount} can not transfer`;
  }
});
