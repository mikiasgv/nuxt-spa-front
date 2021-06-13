<template>
    <div>
        <div
            class="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gray-50
                py-2
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <div class="max-w-md w-full space-y-2">
                <form class="mt-8 space-y-6" @submit.prevent="register">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm space-y-2">
                        <div>
                            <label for="name" class="sr-only"
                                >Name</label
                            >
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autocomplete="name"
                                required
                                class="
                                    appearance-none
                                    rounded-none
                                    relative
                                    block
                                    w-full
                                    px-3
                                    py-2
                                    border border-gray-300
                                    placeholder-gray-500
                                    text-gray-900
                                    rounded-t-md
                                    focus:outline-none
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    focus:z-10
                                    sm:text-sm
                                "
                                placeholder="name address"
                                v-model="form.name"
                            />
                        </div>
                        <div>
                            <label for="email-address" class="sr-only"
                                >Email address</label
                            >
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required
                                class="
                                    appearance-none
                                    rounded-none
                                    relative
                                    block
                                    w-full
                                    px-3
                                    py-2
                                    border border-gray-300
                                    placeholder-gray-500
                                    text-gray-900
                                    rounded-t-md
                                    focus:outline-none
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    focus:z-10
                                    sm:text-sm
                                "
                                placeholder="Email address"
                                v-model="form.email"
                            />
                        </div>
                        <div>
                            <label for="password" class="sr-only"
                                >Password</label
                            >
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required
                                class="
                                    appearance-none
                                    rounded-none
                                    relative
                                    block
                                    w-full
                                    px-3
                                    py-2
                                    border border-gray-300
                                    placeholder-gray-500
                                    text-gray-900
                                    rounded-b-md
                                    focus:outline-none
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    focus:z-10
                                    sm:text-sm
                                "
                                placeholder="Password"
                                v-model="form.password"
                            />
                        </div>
                        <div>
                            <label for="password" class="sr-only"
                                >Password Confirmation</label
                            >
                            <input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                autocomplete="current-password_confirmation"
                                required
                                class="
                                    appearance-none
                                    rounded-none
                                    relative
                                    block
                                    w-full
                                    px-3
                                    py-2
                                    border border-gray-300
                                    placeholder-gray-500
                                    text-gray-900
                                    rounded-b-md
                                    focus:outline-none
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    focus:z-10
                                    sm:text-sm
                                "
                                placeholder="Password_confirmation"
                                v-model="form.password_confirmation"
                            />
                        </div>
                    </div>



                    <div>
                        <button
                            type="submit"
                            class="
                                group
                                relative
                                w-full
                                flex
                                justify-center
                                py-2
                                px-4
                                border border-transparent
                                text-sm
                                font-medium
                                rounded-md
                                text-white
                                bg-indigo-600
                                hover:bg-indigo-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-offset-2
                                focus:ring-indigo-500
                            "
                        >
                            <span
                                class="
                                    absolute
                                    left-0
                                    inset-y-0
                                    flex
                                    items-center
                                    pl-3
                                "
                            >
                                <!-- Heroicon name: solid/lock-closed -->
                                <svg
                                    class="
                                        h-5
                                        w-5
                                        text-indigo-500
                                        group-hover:text-indigo-400
                                    "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
        };
    },
    methods: {
        async register() {
            try {
              await this.$axios.get('sanctum/csrf-cookie');
              await this.$axios.post('register', this.form);
              await this.$auth.loginWith("laravelSanctum", {
                  data: { email: this.form.email, password: this.form.password },
              });
            } catch (e) {}
        },
    },
};
</script>
<style>
</style>
