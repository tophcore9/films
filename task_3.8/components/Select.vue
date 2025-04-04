<template>
    <div class="custom-select" :class="{ 'is-open': isOpen }">
        <div class="selected-option _input" @click="toggleDropdown">
            {{ selectedOption || placeholder }}
            <Icon
                class="arrow-icon"
                :class="isOpen ? 'arrow-icon-rotated' : ''"
                height="16px"
                width="16px"
                url="../icons/select-arrow.svg"
            />
        </div>
        <div v-if="isOpen" class="dropdown">
            <input
                v-if="searchable"
                v-model="searchQuery"
                type="text"
                placeholder="Search..."
                class="search-input"
            />
            <div
                v-for="option in options"
                class="dropdown-item"
                @click="selectOption(option)"
            >
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Icon from '~/components/Icon.vue';

interface Option {
    label: string;
    value: string;
}

export default {
    props: {
        options: {
            type: Array<Option>,
            required: true,
        },
        placeholder: {
            type: String,
            default: 'Popularity Descending',
        },
        modelValue: {
            type: String,
            required: true,
        },
        searchable: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            isOpen: false,
            selectedOption: '',
            searchQuery: '',
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option: Option) {
            this.selectedOption = option.label;
            this.$emit('update:modelValue', option.value);
            this.isOpen = false;
        },
    },
};
</script>

<style scoped lang="scss">
@use '/assets/styles/components/select';
</style>