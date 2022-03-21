/*
 * Confidential and Proprietary.
 * Do not distribute without 1-800-Flowers.com, Inc. consent.
 * Copyright 1-800-Flowers.com, Inc. 2019. All rights reserved.
 */

import { useContext } from 'react';
import { AuthContext } from './auth0-context';

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;
