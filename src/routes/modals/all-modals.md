---
layout: modalLayout
---

<script>
  import {
    SmallModal,
    MediumModal,
    LargeModal,
    ExtraLargeModal,
    SignInModal,
    ModalButton,
    modalIdStore
  }from '$lib/index';
  
  // small
  let smallModalId = "small-modal";
  let btnSName = "Small Modal";
  let titleS = "Small Modal Title";
  let btnS1 = "I accept";
  let btnS2 = "Decline";
  let smallModal;

  const handlebtnS1 = () => {
    alert("handlebtnS1 is clicked from a parent page.");
    smallModal.closeModal()
  };

  const handlebtnS2 = () => {
    alert("handlebtnS2 is clicked from a parent page.");
    smallModal.closeModal()
  };

  // medium
  let mediumModalId = "medium-modal";
  let btnMName = "Medium Modal";
  let btnMColor = "red";
  let titleM = "Medium Modal Title";
  let btnM1 = "I accept";
  let btnM2 = "Decline";
  let mediumModal;

  const handlebtnM1 = () => {
    alert("handlebtnM1 is clicked from a parent page.");
    mediumModal.closeModal()
  };

  const handlebtnM2 = () => {
    alert("handlebtnM2 is clicked from a parent page.");
    mediumModal.closeModal()
  };

  // Large
  let largeModalId = "large-modal";
  let btnLName = "Large Modal";
  let btnLColor = "yellow";
  let titleL = "Large Modal Title";
  let btnL1 = "I accept";
  let btnL2 = "Decline";
  let largeModal;

  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    largeModal.closeModal()
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    largeModal.closeModal()
  };

  // Extra Large
  let extraLargeModalId = "extralarge-modal";
  let btnExLName = "Extra Large Modal";
  let btnExLColor = "green";
  let titleExL = "Exttra Large Modal";
  let btnExL1 = "I accept";
  let btnExL2 = "Decline";
  let extraLargeModal;

  const handlebtnExL1 = () => {
    alert("handlebtnExL1 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };

  const handlebtnExL2 = () => {
    alert("handlebtnExL2 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };

  // SignIn Modal
  let signinId = "signin-modal";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "purple";
  let titleSignIn = "Sign in to our platform";
  let lostPasswordLink = "/";
  let signUpLink = "/about";
  let formLink = "/modals";
</script>

<h1 class="text-3xl w-full dark:text-white pt-16">All Modals</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Small Modals</h2>

```html
<script>
  const handlebtnS1 = () => {
    alert("handlebtnS1 is clicked from a parent page.");
    smallModal.closeModal()
  };

  const handlebtnS2 = () => {
    alert("handlebtnS2 is clicked from a parent page.");
    smallModal.closeModal()
  };
</script>
<ModalButton id={smallModalId} btnName={btnSName} />
<SmallModal
  bind:this={smallModal}
  title={titleS}
  btn1={btnS1}
  btn2={btnS2}
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</SmallModal>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- Small Modal Button -->
  <ModalButton id={smallModalId} btnName={btnSName} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Medium Modals</h2>

```html
<script>
  const handlebtnM1 = () => {
    alert("handlebtnM1 is clicked from a parent page.");
    mediumModal.closeModal()
  };

  const handlebtnM2 = () => {
    alert("handlebtnM2 is clicked from a parent page.");
    mediumModal.closeModal()
  };
</script>
<ModalButton id={mediumModalId} btnName={btnMName} btnColor={btnMColor} />
<MediumModal
  bind:this={mediumModal}
  btnColor={btnMColor}
  title={titleM}
  btn1={btnM1}
  btn2={btnM2}
  on:handlebtn1={handlebtnM1}
  on:handlebtn2={handlebtnM2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</MediumModal>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- Medium Modal Button -->
  <ModalButton id={mediumModalId} btnName={btnMName} btnColor={btnMColor} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Large Modals</h2>

```html
<script>
  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    largeModal.closeModal()
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    largeModal.closeModal()
  };
</script>
<ModalButton id={largeModalId} btnName={btnLName} btnColor={btnLColor} />
<LargeModal
  btnColor={btnLColor}
  title={titleL}
  btn1={btnL1}
  btn2={btnL2}
  on:handlebtn1={handlebtnL1}
  on:handlebtn2={handlebtnL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</LargeModal>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- Large Modal Button -->
  <ModalButton id={largeModalId} btnName={btnLName} btnColor={btnLColor} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Extra-Large Modals</h2>

```html
<script>
  const handlebtnExL1 = () => {
    alert("handlebtnExL1 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };

  const handlebtnExL2 = () => {
    alert("handlebtnExL2 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };
</script>
<ModalButton
  id={extraLargeModalId}
  btnName={btnExLName}
  btnColor={btnExLColor}
/>
<ExtraLargeModal
  bind:this={extraLargModal}
  btnColor={btnExLColor}
  title={titleExL}
  btn1={btnExL1}
  btn2={btnExL2}
  on:handlebtn1={handlebtnExL1}
  on:handlebtn2={handlebtnExL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</ExtraLargeModal>   
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- ExtraLarge Modal Button -->
  <ModalButton
    id={extraLargeModalId}
    btnName={btnExLName}
    btnColor={btnExLColor}
  />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">SingIn Modals</h2>

```html
<ModalButton
  id={signinId}
  btnName={btnSignInName}
  btnColor={btnSignInColor}
/>
<SignInModal
  {btnSignInColor}
  {titleSignIn}
  {lostPasswordLink}
  {signUpLink}
  {formLink}
/>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- SignInModal Button -->
<ModalButton
  id={signinId}
  btnName={btnSignInName}
  btnColor={btnSignInColor}
/>
</div>

<SmallModal
  bind:this={smallModal}
  title={titleS}
  btn1={btnS1}
  btn2={btnS2}
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</SmallModal>

<MediumModal
  bind:this={mediumModal}
  btnColor={btnMColor}
  title={titleM}
  btn1={btnM1}
  btn2={btnM2}
  on:handlebtn1={handlebtnM1}
  on:handlebtn2={handlebtnM2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</MediumModal>

<LargeModal
  bind:this={largeModal}
  btnColor={btnLColor}
  title={titleL}
  btn1={btnL1}
  btn2={btnL2}
  on:handlebtn1={handlebtnL1}
  on:handlebtn2={handlebtnL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</LargeModal>

<ExtraLargeModal
  bind:this={extraLargeModal}
  btnColor={btnExLColor}
  title={titleExL}
  btn1={btnExL1}
  btn2={btnExL2}
  on:handlebtn1={handlebtnExL1}
  on:handlebtn2={handlebtnExL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</ExtraLargeModal>

<SignInModal
  {btnSignInColor}
  {titleSignIn}
  {lostPasswordLink}
  {signUpLink}
  {formLink}
/>
