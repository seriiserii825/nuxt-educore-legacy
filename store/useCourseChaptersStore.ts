import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {TCourseChapter} from '~/types/TCourseChapter';
export const useCourseChaptersStore = defineStore('course_chapters', () => {
    const chapters = ref<TCourseChapter[]>();
    const chapters_loading = ref(false);
    const setChapters = (data: TCourseChapter[]) => {
        chapters.value = data;
    }
    const setChaptersLoading = (loading: boolean) => {
        chapters_loading.value = loading;
    }
    const chapter_was_created = ref(false);
    const setChapterWasCreated = (created: boolean) => {
        chapter_was_created.value = created;
    }
    return {
        chapters,
        setChapters,
        chapters_loading,
        setChaptersLoading,
        chapter_was_created,
        setChapterWasCreated
    }
})
