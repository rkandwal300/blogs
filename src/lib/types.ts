export type TCategoryResponse = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    doctors: {
      data: TDoctor[];
    };
    image: {
      data: ImageData;
    };
  };
};

export type TDoctor = {
  id: number;
  attributes: {
    name: string;
    experience: string;
    address: string;
    clinic: string;
    rating: number;
    totalPatients: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: ImageData;
    };
  };
};

type ImageData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail?: ThumbnailData;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

type ThumbnailData = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type CategorystateValue = {
  categories: TCategoryResponse[];
  handleGetDoctors: (category: string) => void;
  doctors: {
    category: string;
    doctorList: TDoctor[];
  };
};
