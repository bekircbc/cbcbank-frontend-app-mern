btnClose.addEventListener("click", async (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.id &&
    +inputClosePin.value === currentAccount.pin &&
    +inputConfirmPin.value === currentAccount.pin
  ) {
    await fetch(`http://localhost:3000/accounts/${currentAccount.id}`, {
      method: "DELETE",
    });

    // window.location.replace("/");
    // const index = accounts.findIndex((acc) => acc.id === currentAccount.id);
    // console.log(index);
    // // .indexOf(23)

    // // Delete account
    // accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = inputConfirmPin.value = "";
});
