import axios from "axios";
import type { AxiosInstance } from "axios";

// API URL можно переопределить через переменные окружения
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Интерфейсы для форм
export interface CreatePartnerApplicationDto {
  restaurantName: string;
  businessType?: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  restaurantAddress?: string;
  description?: string;
}

export interface CreateGroceryStoreApplicationDto {
  storeName: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  storeAddress?: string;
  description?: string;
}

export interface CreateCourierApplicationDto {
  fullName: string;
  phone: string;
  email?: string;
  city: string;
  vehicleType: string;
  experience?: string;
}

export interface ApplicationResponse {
  id: string;
  createdAt: string;
  status: string;
  message: string;
}

// API методы
export const applicationsApi = {
  // Подача заявки ресторана/магазина
  submitPartnerApplication: async (
    data: CreatePartnerApplicationDto,
  ): Promise<ApplicationResponse> => {
    try {
      const response = await apiClient.post<ApplicationResponse>(
        "/restaurant-applications",
        data,
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  // Подача заявки магазина
  submitGroceryStoreApplication: async (
    data: CreateGroceryStoreApplicationDto,
  ): Promise<ApplicationResponse> => {
    try {
      const response = await apiClient.post<ApplicationResponse>(
        "/grocery-store-applications",
        data,
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  // Подача заявки курьера
  submitCourierApplication: async (
    data: CreateCourierApplicationDto,
  ): Promise<ApplicationResponse> => {
    try {
      const response = await apiClient.post<ApplicationResponse>(
        "/courier-applications",
        data,
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// Обработчик ошибок API
export function handleApiError(error: any): Error {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Ошибка при отправке заявки";

    return new Error(message);
  }

  return error instanceof Error ? error : new Error("Неизвестная ошибка");
}

export default apiClient;
