import React, { useState } from 'react';
import { Upload, Music, CheckCircle, AlertCircle, X } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Card, { CardHeader, CardContent } from '../../components/ui/Card';

const SubmitMusic: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    language: '',
    platforms: [] as string[]
  });
  const [files, setFiles] = useState({
    audio: null as File | null,
    artwork: null as File | null
  });
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const genreOptions = [
    { value: '', label: 'Select Genre' },
    { value: 'pop', label: 'Pop' },
    { value: 'rock', label: 'Rock' },
    { value: 'hip-hop', label: 'Hip Hop' },
    { value: 'electronic', label: 'Electronic' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'classical', label: 'Classical' },
    { value: 'country', label: 'Country' },
    { value: 'r&b', label: 'R&B' },
    { value: 'indie', label: 'Indie' },
    { value: 'ambient', label: 'Ambient' }
  ];

  const languageOptions = [
    { value: '', label: 'Select Language' },
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' },
    { value: 'instrumental', label: 'Instrumental' }
  ];

  const platforms = [
    'Spotify',
    'Apple Music',
    'YouTube Music',
    'Amazon Music',
    'Deezer',
    'SoundCloud',
    'Tidal',
    'Pandora'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlatformChange = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach(file => {
      if (file.type.startsWith('audio/')) {
        setFiles(prev => ({ ...prev, audio: file }));
      } else if (file.type.startsWith('image/')) {
        setFiles(prev => ({ ...prev, artwork: file }));
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'audio' | 'artwork') => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({ ...prev, [type]: file }));
    }
  };

  const removeFile = (type: 'audio' | 'artwork') => {
    setFiles(prev => ({ ...prev, [type]: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <Card className="text-center py-12">
          <CardContent>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your track has been submitted for review. You'll receive a notification once it's approved.
            </p>
            <Button onClick={() => setSubmitted(false)}>
              Submit Another Track
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Music</h1>
        <p className="text-gray-600">Upload your track and get it distributed to major streaming platforms worldwide.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* File Upload Section */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Upload Files</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Audio File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Audio File *
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    dragActive ? 'border-purple-400 bg-purple-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {files.audio ? (
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Music className="h-5 w-5 text-gray-600" />
                        <span className="text-sm text-gray-700">{files.audio.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('audio')}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">Drag and drop your audio file here, or click to browse</p>
                      <p className="text-sm text-gray-500">Supported formats: MP3, WAV, FLAC (Max 50MB)</p>
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => handleFileChange(e, 'audio')}
                        className="hidden"
                        id="audio-upload"
                      />
                      <label htmlFor="audio-upload">
                        <Button type="button" variant="outline" className="mt-2">
                          Choose Audio File
                        </Button>
                      </label>
                    </>
                  )}
                </div>
              </div>

              {/* Artwork Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Artwork *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  {files.artwork ? (
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={URL.createObjectURL(files.artwork)} 
                          alt="Cover art preview" 
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span className="text-sm text-gray-700">{files.artwork.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('artwork')}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">Upload your cover artwork</p>
                      <p className="text-sm text-gray-500">Minimum 3000x3000px, JPG or PNG (Max 10MB)</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'artwork')}
                        className="hidden"
                        id="artwork-upload"
                      />
                      <label htmlFor="artwork-upload">
                        <Button type="button" variant="outline" className="mt-2">
                          Choose Artwork
                        </Button>
                      </label>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Track Information */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Track Information</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="title"
                label="Track Title"
                placeholder="Enter track title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <Input
                name="artist"
                label="Artist Name"
                placeholder="Enter artist name"
                value={formData.artist}
                onChange={handleInputChange}
                required
              />
              <Select
                name="genre"
                label="Genre"
                options={genreOptions}
                value={formData.genre}
                onChange={handleInputChange}
                required
              />
              <Select
                name="language"
                label="Language"
                options={languageOptions}
                value={formData.language}
                onChange={handleInputChange}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Platform Selection */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Distribution Platforms</h2>
            <p className="text-sm text-gray-600">Select the platforms where you want your music distributed</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform) => (
                <label key={platform} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.platforms.includes(platform)}
                    onChange={() => handlePlatformChange(platform)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">{platform}</span>
                </label>
              ))}
            </div>
            {formData.platforms.length === 0 && (
              <div className="flex items-center space-x-2 mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-700">Please select at least one platform</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting || !files.audio || !files.artwork || formData.platforms.length === 0}
            size="lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit for Review'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmitMusic;