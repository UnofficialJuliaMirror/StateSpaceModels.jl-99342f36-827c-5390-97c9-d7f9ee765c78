var documenterSearchIndex = {"docs":
[{"location":"#StateSpaceModels.jl-Documentation-1","page":"Home","title":"StateSpaceModels.jl Documentation","text":"","category":"section"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package is registered in METADATA so you will can do Pkg.add it as follows:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add StateSpaceModels","category":"page"},{"location":"#Notes-1","page":"Home","title":"Notes","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"StateSpaceModels.jl is a package for modeling, forecasting and simulating time series in a state space framework based on structural models of Harvey (1989), in which a time series is decomposed in trend, slope and seasonals. Implementations were made based on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Works using this package:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Simulating Low and High-Frequency Energy Demand Scenarios in a Unified Framework – Part I: Low-Frequency Simulation","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Current features:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Basic structural model (trend, slope, seasonal)\nExogenous variables\nSquare-root Kalman Filter and smoother\nBig Kappa initialization\nMonte Carlo simulation\nMaximum likelihood estimation\nMultivariate modeling","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Future features (work in progress):","category":"page"},{"location":"#","page":"Home","title":"Home","text":"User-defined model\nForecasting and confidence intervals\nCompletion of missing values","category":"page"},{"location":"manual/#Manual-1","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/#Introduction-1","page":"Manual","title":"Introduction","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"In this package we consider the following state space model","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"begingather*\n    beginaligned\n        y_t = Z_t alpha_t  + varepsilon_t quad quad quad t = 1 dots n\n        alpha_t+1 = T_t alpha_t + R_t eta_t\n    endaligned\nendgather*","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"where","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"beginbmatrix\n    varepsilon_t \n    eta_t \n    alpha_1\nendbmatrix\nsim\nNID\nbeginpmatrix\n    beginbmatrix\n        0 \n        0 \n        a_1\n    endbmatrix\n    \n    beginbmatrix\n        H_t  0  0\n        0  Q_t  0\n        0  0  P_1\n    endbmatrix\nendpmatrix","category":"page"},{"location":"manual/#Data-Structures-1","page":"Manual","title":"Data Structures","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"StateSpaceDimensions\nStateSpaceModel\nStateSpaceParameters\nSmoothedState\nFilterOutput\nStateSpace","category":"page"},{"location":"manual/#StateSpaceModels.StateSpaceDimensions","page":"Manual","title":"StateSpaceModels.StateSpaceDimensions","text":"StateSpaceDimensions\n\nStateSpaceModel dimensions, following the notation of on the book  \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\nn is the number of observations\np is the dimension of the observation vector y_t\nm is the dimension of the state vector alpha_t\nr is the dimension of the state covariance matrix Q_t\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.StateSpaceModel","page":"Manual","title":"StateSpaceModels.StateSpaceModel","text":"StateSpaceModel\n\nFollowing the notation of on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\ny A n times p matrix containing observations\nZ A p times m times n matrix\nT A m times m matrix\nR A m times r matrix\n\nA StateSpaceModel object can be defined using StateSpaceModel(y::Matrix{Float64}, Z::Array{Float64, 3}, T::Matrix{Float64}, R::Matrix{Float64}).\n\nAlternatively, if Z is time-invariant, it can be input as a single p times m matrix.\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.SmoothedState","page":"Manual","title":"StateSpaceModels.SmoothedState","text":"SmoothedState\n\nFollowing the notation of on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\nalpha Expected value of the smoothed state E(alpha_ty_1 dots  y_n)\nV Error covariance matrix of smoothed state Var(alpha_ty_1 dots  y_n)\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.StateSpace","page":"Manual","title":"StateSpaceModels.StateSpace","text":"StateSpace\n\nStateSpaceModel\n\n\n\n\n\n","category":"type"},{"location":"manual/#Default-models-1","page":"Manual","title":"Default models","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"The local level model is defined by","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"begingather*\n    beginaligned\n        y_t =  mu_t  + varepsilon_t quad varepsilon_t sim mathcalN(0 sigma^2_varepsilon)\n        mu_t+1 = mu_t + eta_t quad eta_t sim mathcalN(0 sigma^2_eta)\n    endaligned\nendgather*","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"local_level","category":"page"},{"location":"manual/#StateSpaceModels.local_level","page":"Manual","title":"StateSpaceModels.local_level","text":"local_level(y::VecOrMat{Typ}) where Typ <: AbstractFloat\n\nBuild state-space system for a local level model with observations y.\n\nIf y is proided as an Array{Typ, 1} it will be converted to an Array{Typ, 2} inside the StateSpaceModel.\n\n\n\n\n\n","category":"function"},{"location":"manual/#","page":"Manual","title":"Manual","text":"The linear trend model is defined by","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"begingather*\n    beginaligned\n        y_t =  mu_t  + varepsilon_t quad varepsilon_t sim mathcalN(0 sigma^2_varepsilon)\n        mu_t+1 = mu_t + nu_t + xi_t quad xi_t sim mathcalN(0 sigma^2_xi)\n        nu_t+1 = nu_t + zeta_t quad zeta_t sim mathcalN(0 sigma^2_zeta)\n    endaligned\nendgather*","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"linear_trend","category":"page"},{"location":"manual/#StateSpaceModels.linear_trend","page":"Manual","title":"StateSpaceModels.linear_trend","text":"linear_trend(y::VecOrMat{Typ}) where Typ <: AbstractFloat\n\nBuild state-space system for a linear trend model with observations y.\n\nIf y is proided as an Array{Typ, 1} it will be converted to an Array{Typ, 2} inside the StateSpaceModel.\n\n\n\n\n\n","category":"function"},{"location":"manual/#","page":"Manual","title":"Manual","text":"The structural model is defined by","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"<!– TODO mathematical model –>","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"structuralmodel","category":"page"},{"location":"manual/#Estimation-1","page":"Manual","title":"Estimation","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"The model estimation is made using the function statespace(y, s; X, nseeds). It receives as argument the time series y and the desired seasonality s. The user can input exogenous variables using optional argument X and specify the desired number of random seeds nseeds to perform the estimation.","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"<!– TODO –>","category":"page"},{"location":"manual/#Simulation-1","page":"Manual","title":"Simulation","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"Simulation is made using the function simulate. It receives as argument a StateSpace object, the number of steps ahead N and the number of scenarios to simulate S.","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"simulation = simulate(ss, N, S)","category":"page"},{"location":"manual/#Filters-1","page":"Manual","title":"Filters","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"<!– TODO sqrt kalman filter, put recursion and reference –> <!– TODO bigkappa kalman filter, put recursion and reference –>","category":"page"},{"location":"manual/#Optimization-methods-1","page":"Manual","title":"Optimization methods","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"<!– LBFGS put reference and Optim manual –>","category":"page"},{"location":"examples/#Examples-1","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#Air-Passengers-1","page":"Examples","title":"Air Passengers","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Let's take the classical Air Passenger time series as an example. In order to avoid multiplicative effects, we use the well-known approach of taking the log of the series. The code is in the example folder.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"using CSV, StateSpaceModels, Plots, Statistics, Dates\n\n#load the AirPassengers dataset\nAP = CSV.read(\"AirPassengers.csv\")\n\n#Take the log of the series\nlogAP = log.(Array{Float64}(AP[:Passengers]))\n\np1 = plot(AP[:Date], logAP, label = \"AirPassengers timeseries\", size = (1000, 500))","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"(Image: Log of Air Passengers time series)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Estimating a StateSpaceModel gives us the trend and seasonal components of the time series.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"#Define its seasonality \ns = 12\n\n#Estimate a StateSpace Structure\nss = statespace(logAP, s)\n\n#Analyze its decomposition in seasonal and trend\np2 = plot(AP[:Date], ss.state.seasonal, label = \"AirPassengers seasonal\", size = (1000, 500))\np3 = plot(AP[:Date], ss.state.trend, label = \"AirPassengers trend\", size = (1000, 500))","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"(Image: Lof of Air Passengers trend component) (Image: Log of Air Passengers seasonal component)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"We can also generate future scenarios for this time series through Monte Carlo simulation. In this example, we simulate 100 scenarios for up to five years (60 time periods) ahead.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"#Simulate 100 scenarios, 60 steps ahead\nnum_scenarios = 100\nnum_steps_ahead = 60\nsimulation = simulate(ss, num_steps_ahead, num_scenarios)\n\n#Define simulation dates\nfirstdate = AP[:Date][end] + Month(1)\nnewdates = collect(firstdate:Month(1):firstdate + Month(num_steps_ahead - 1))\n\n#Evaluating the mean of the forecast and its quantiles\nsimulation_mean = mean(simulation, dims = 3)[1, :, :]\n\nn = length(logAP)\nnmonths = length(simulation[1, :, 1])\nsimulation_q05 = zeros(nmonths)\nsimulation_q95 = zeros(nmonths)\nfor t = 1:nmonths\n    simulation_q05[t] = quantile(simulation[1, t, :], 0.05)\n    simulation_q95[t] = quantile(simulation[1, t, :], 0.95)\nend\n\nplot!(p1, newdates, [simulation_q05, simulation_mean, simulation_q95], labels = [\"5% quantile\", \"mean\", \"95% quantile\"])","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"(Image: Log of Air Passengers simulation)","category":"page"},{"location":"examples/#Vehicle-tracking-1","page":"Examples","title":"Vehicle tracking","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"In order to illustrate one application that does not fall into any of the predefined models, thus requiring a user-defined model, let us consider an example from control theory. More precisely, we are going to use StateSpaceModels.jl to track a vehicle from noisy sensor data. In this case, y_t is a 2 times 1 observation vector representing the corrupted measurements of the vehicle's position on the two-dimensional plane in instant t. Since sensors collect the observations with the presence of additive Gaussian noise, we need to filter the observation in order to obtain a better estimate of the vehicle's position.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"The position and speed in each dimension compose the state of the vehicle. Let us refer to x_t^(d) as the position on the axis d and to dotx^(d)_t as the speed on the axis d in instant t. Additionally, let eta^(d)_t be the input drive force on the axis d, which acts as state noise. For a single dimension, we can describe the vehicle dynamics as","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"beginalign\n    x_t+1^(d) = x_t^(d) + Big( 1 - fracrho Delta_t2 Big) Delta_t dotx^(d)_t + fracDelta^2_t2 eta_t^(d) \n    dotx^(d)_t+1 = (1 - rho) dotx^(d)_t + Delta_t eta^(d)_t\nendalign","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"where Delta_t is the time step and rho is a known damping effect on speed. ","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"We can cast this dynamical system as a state-space model in the following manner:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"beginalign \n    y_t = beginbmatrix 1  0  0  0  0  0  1  0 endbmatrix alpha_t+1 + varepsilon_t \n    alpha_t+1 = beginbmatrix 1  (1 - tfracrho Delta_t2) Delta_t  0  0  0  (1 - rho)  0  0  0  0  1  (1 - tfracrho Delta_t2)  0  0  0  (1 - rho) endbmatrix alpha_t + beginbmatrix tfracDelta^2_t2  0  Delta_t  0  0  tfracDelta^2_t2  0  Delta_t endbmatrix eta_t\nendalign","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"where alpha_t = (x_t^(1) dotx^(1)_t x_t^(2) dotx^(2)_t)^top and eta_t = (eta^(1)_t eta^(2)_t)^top.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"We can formulate the vehicle tracking problem in StateSpaceModels.jl as:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"# State transition matrix\nT = kron(Matrix{Float64}(I, p, p), [1 (1 - ρ * Δ / 2) * Δ; 0 (1 - ρ * Δ)])\n# Input matrix\nR = kron(Matrix{Float64}(I, p, p), [.5 * Δ^2; Δ])\n# Output (measurement) matrix\nZ = kron(Matrix{Float64}(I, p, p), [1 0])\n# User defined model\nmodel = StateSpaceModel(y, Z, T, R)\n# Estimate vehicle speed and position\nss = statespace(model)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"In this example, we define the noise variances H and Q, generate the noises and simulate a random vehicle trajectory using the state-space equations:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"# Generate random actuators\nQ = .5 * Matrix{Float64}(I, q, q)\nη = MvNormal(zeros(q), Q)\n# Generate random measurement noise\nH = 2. * Matrix{Float64}(I, p, p)\nε = MvNormal(zeros(p), H)\n# Simulate vehicle trajectory\nα = zeros(n + 1, m)\ny = zeros(n, p)\nfor t in 1:n\n    y[t, :] = Z * α[t, :] + rand(ε)\n    α[t + 1, :] = T * α[t, :] + R * rand(η)  \nend","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"An illustration of the results can be seen in the following figure. It can be seen that the measurements are reasonably noisy when compared to the true position. Furthermore, the estimated positions, represented by the smoothed state, effectively estimate the true positions with small inaccuracies.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"(Image: Vehicle tracking)","category":"page"},{"location":"reference/#Reference-1","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"<!– utils.jl –>","category":"page"},{"location":"reference/#","page":"Reference","title":"Reference","text":"size\nztr\ncheck_steady_state\nensure_pos_sym","category":"page"},{"location":"reference/#Base.size","page":"Reference","title":"Base.size","text":"size(model::StateSpaceModel)\n\nReturn the dimensions n, p, m and r of the StateSpaceModel\n\n\n\n\n\n","category":"function"},{"location":"reference/#StateSpaceModels.ztr","page":"Reference","title":"StateSpaceModels.ztr","text":"ztr(model::StateSpaceModel)\n\nReturn the state space model arrays Z, T and R of the StateSpaceModel\n\n\n\n\n\n","category":"function"}]
}
