////         $table->enum('demo_video_storage', ['upload', 'youtube', 'vimeo', 'external_link'])->default('upload');
export const demo_video_storage_options = [
  { key: 'upload', value: 'Upload'},
  { key: 'youtube', value: 'YouTube'},
  { key: 'vimeo', value: 'Vimeo'},
  { key: 'external_link', value: 'External Link'},
]
