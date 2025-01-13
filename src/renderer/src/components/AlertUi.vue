<template>
	<TransitionRoot appear :show="alert?.show" as="template">
		<Dialog as="div" @close="closeAlert" class="relative z-20">
			<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
				leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black/25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex justify-center items-center p-4 min-h-full text-center">
					<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95">
						<DialogPanel
							class="shadow-xl p-6 rounded-2xl w-full max-w-sm text-left transform transition-all overflow-hidden align-middle box">


							<DialogTitle as="h3" class="font-medium text-center text-md leading-6"
								:class="alerts[alert.notify.status]?.style">
                <component
					:is="alerts[alert.notify.status]?.icon"
					class="mx-auto w-8 h-8"
				/>
								{{ alerts[alert.notify.status]?.title }}
							</DialogTitle>

							<div class="mx-auto mt-2 w-4/5 text-center">
								<p class="m-0 p-0 text-xs">{{ alert?.notify.message }}</p>
							</div>

							<div class="flex justify-center mt-6">
								<button @click="closeAlert" type="button" class="shadow-sm mx-auto mt-4 btn btn-alert"
									:class="alerts[alert.notify.status]?.btn">
									<component :is="CheckIcon" class="w-5 h-5"></component>
								</button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>

import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from '@headlessui/vue';
import {
	ExclamationTriangleIcon,
	CheckCircleIcon,
	BugAntIcon,
	InformationCircleIcon,
	CheckIcon,
} from '@heroicons/vue/24/outline';


const alert = defineModel({type: Object, default:{show: false, notify: {}}})

const alerts = {
	success: {
		style: 'alert-success',
		icon: CheckCircleIcon,
		title: 'Sucesso!',
		btn: 'btn-alert-success',
	},
	warning: {
		style: 'alert-warning',
		icon: ExclamationTriangleIcon,
		title: 'Alerta!',
		btn: 'btn-alert-warning',
	},
	danger: {
		style: 'alert-danger',
		icon: BugAntIcon,
		title: 'Falha!',
		btn: 'btn-alert-danger',
	},
	info: {
		style: 'alert-info',
		icon: InformationCircleIcon,
		title: 'Informe!',
		btn: 'btn-alert-info',
	},
};

function closeAlert() {
	alert.value.show = false;
}


</script>

<style scoped>
.wall {
	background-color: var(--load-color);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	transition: 0.5s;
}

.box-alert {
	width: 300px;
	min-height: 120px;
	border-radius: 20px;
	position: absolute;
	top: calc(50% - 80px);
	left: calc(50% - 150px);
	background-color: var(--background-secondary-color);
}

.efect-down * {
	display: none;
}

.efect-down {
	opacity: 0;
	transition: 0.1s;
}

.alert-success {
	color: var(--success-color);
}

.alert-warning {
	color: var(--warning-color);
}

.alert-danger {
	color: var(--error-color);
}

.alert-info {
	color: var(--info-color);
}

.btn-alert {
	border-radius: 50%;
	padding: 8px !important;
	display: flex;
	align-items: center;
	justify-content: center;
}

.btn-alert-success {
	background-color: var(--success-color);
	color: var(--success-color-hover);
}

.btn-alert-warning {
	background-color: var(--warning-color);
	color: var(--warning-color-hover);
}

.btn-alert-danger {
	background-color: var(--error-color);
	color: var(--error-color-hover);
}

.btn-alert-info {
	background-color: var(--info-color);
	color: var(--info-color-hover);
}
</style>
