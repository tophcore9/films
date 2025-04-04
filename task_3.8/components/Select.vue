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
.custom-select {
    position: relative;
}

.selected-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    cursor: pointer;
}

.selected-option:hover {
    border-color: #888;
}

.dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    min-width: 100%;
    background-color: #fff;
    z-index: 1;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 13px;
}

.dropdown-item {
    padding: 10px;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

.search-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 8px;
}

.is-open .selected-option {
    border-color: #888;
}

.arrow-icon {
    transition: transform 0.2s ease-in-out;
}

.arrow-icon-rotated {
    transform: rotate(180deg);
}
</style>