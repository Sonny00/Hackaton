import axios from "axios";
import { useUser } from "../Contexts/UserProvider";
import { useEffect, useState } from "react";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

function getRequestHeaders(token = null, withBody = false) {
    return {
        "Content-Type": withBody ? "application/json" : undefined,
        Authorization: token != null ? `Bearer ${token}` : undefined,
    };
}

const apiClient = {
    get: function (url, token = null) {
        return axiosInstance.get(url, {
            headers: getRequestHeaders(token),
        });
    },
    post: function (url, data = null, token = null) {
        return axiosInstance.post(url, data, {
            headers: getRequestHeaders(token, data != null),
        });
    },
    put: function (url, data = null, token = null) {
        return axiosInstance.put(url, data, {
            headers: getRequestHeaders(token, data != null),
        });
    },
    patch: function (url, data = null, token = null) {
        return axiosInstance.patch(url, data, {
            headers: getRequestHeaders(token, data != null),
        });
    },
    delete: function (url, token = null) {
        return axiosInstance.delete(url, {
            headers: getRequestHeaders(token),
        });
    },
};

export default function useApi() {
    const { user } = useUser();
    const [token, setToken] = useState(() => user?.token);

    useEffect(() => {
        setToken(user?.token);
    }, [user]);

    function login(email, password) {
        return apiClient.post("auth/login", { email, password }, token);
    }

    function getLoggedInUser(id, accessToken = null) {
        return apiClient.get(`users/${id}`, accessToken ?? token);
    }

    function getUsers(selectedFilter, searchInput) {
        return apiClient.get(
            `users?skill=${selectedFilter ?? ""}&search=${searchInput ?? ""}`,
            token,
        );
    }

    function getSkills() {
        return apiClient.get(`skills`, token);
    }

    // Events
    function getEvents() {
        return apiClient.get(`events`, token);
    }

    function addEvent(event) {
        return apiClient.post("events", { ...event }, token);
    }

    function updateEvent(id, data) {
        return apiClient.patch(`events/${id}`, { ...data }, token);
    }

    function deleteEvent(id) {
        return apiClient.delete(`events/${id}`, token);
    }

    function getUser(id) {
        return apiClient.get(`users/${id}`, token);
      }
    
    function createSkill(skillName, description = '', level, UserId, type) {
        return apiClient.post("skills", { skillName, level, description, UserId, type }, token);
}



    return {
        login,
        getLoggedInUser,
        getUsers,
        getSkills,
        getEvents,
        addEvent,
        updateEvent,
        deleteEvent,
   , getUser, createSkill};
}
