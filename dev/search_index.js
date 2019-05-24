var documenterSearchIndex = {"docs":
[{"location":"#StateSpaceModels.jl-Documentation-1","page":"Home","title":"StateSpaceModels.jl Documentation","text":"","category":"section"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package is registered in METADATA so you will can do Pkg.add it as follows:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add StateSpaceModels","category":"page"},{"location":"#Notes-1","page":"Home","title":"Notes","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"StateSpaceModels.jl is a package for modeling, forecasting and simulating time series in a state space framework based on structural models of Harvey (1989), in which a time series is decomposed in trend, slope and seasonals. Implementations were made based on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Works using this package:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Simulating Low and High-Frequency Energy Demand Scenarios in a Unified Framework – Part I: Low-Frequency Simulation","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Current features:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Basic structural model (trend, slope, seasonal)\nExogenous variables\nSquare-root Kalman Filter and smoother\nBig Kappa initialization\nMonte Carlo simulation\nMaximum likelihood estimation\nMultivariate modeling","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Future features (work in progress):","category":"page"},{"location":"#","page":"Home","title":"Home","text":"User-defined model\nForecasting and confidence intervals\nCompletion of missing values","category":"page"},{"location":"manual/#Manual-1","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/#Introduction-1","page":"Manual","title":"Introduction","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"In this package we consider the following state space model","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"begingather*\n    beginaligned\n        y_t = Z_t alpha_t  + varepsilon_t quad quad quad t = 1 dots n\n        alpha_t+1 = T_t alpha_t + R_t eta_t\n    endaligned\nendgather*","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"where","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"beginbmatrix\n    varepsilon_t \n    eta_t \n    alpha_1\nendbmatrix\nsim\nNID\nbeginpmatrix\n    beginbmatrix\n        0 \n        0 \n        a_1\n    endbmatrix\n    \n    beginbmatrix\n        H_t  0  0\n        0  Q_t  0\n        0  0  P_1\n    endbmatrix\nendpmatrix","category":"page"},{"location":"manual/#Data-Structures-1","page":"Manual","title":"Data Structures","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"StateSpaceDimensions\nStateSpaceModel\nStateSpaceParameters\nSmoothedState\nFilterOutput\nStateSpace","category":"page"},{"location":"manual/#StateSpaceModels.StateSpaceDimensions","page":"Manual","title":"StateSpaceModels.StateSpaceDimensions","text":"StateSpaceDimensions\n\nStateSpaceModel dimensions, following the notation of on the book  \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\nn is the number of observations\np is the dimension of the observation vector y_t\nm is the dimension of the state vector alpha_t\nr is the dimension of the state covariance matrix Q_t\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.StateSpaceModel","page":"Manual","title":"StateSpaceModels.StateSpaceModel","text":"StateSpaceModel\n\nFollowing the notation of on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\ny A n times p matrix containing observations\nZ A vector of dimension n where each entry is a p times m matrix\nT A m times m matrix\nR A m times r matrix\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.StateSpaceParameters","page":"Manual","title":"StateSpaceModels.StateSpaceParameters","text":"StateSpaceParameters\n\nFollowing the notation of on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\nsqrtH matrix with sqrt-covariance of the observation vector H_t\nsqrtQ matrix with sqrt-covariance of the state vector Q_t\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.SmoothedState","page":"Manual","title":"StateSpaceModels.SmoothedState","text":"SmoothedState\n\nFollowing the notation of on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\nalpha Expected value of the smoothed state E(alpha_ty_1 dots  y_n)\nV Error covariance matrix of smoothed state Var(alpha_ty_1 dots  y_n)\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.FilterOutput","page":"Manual","title":"StateSpaceModels.FilterOutput","text":"FilterOutput\n\nFollowing the notation of on the book \"Time Series Analysis by State Space Methods\" (2012) by J. Durbin and S. J. Koopman.\n\na \nv \nsteadystate\ntsteady\nKsteady\nU2star\nsqrtP\nsqrtF\nsqrtPsteady\n\n\n\n\n\n","category":"type"},{"location":"manual/#StateSpaceModels.StateSpace","page":"Manual","title":"StateSpaceModels.StateSpace","text":"StateSpace\n\nStateSpaceModel\n\n\n\n\n\n","category":"type"},{"location":"manual/#Estimation-1","page":"Manual","title":"Estimation","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"The model estimation is made using the function statespace(y, s; X, nseeds). It receives as argument the time series y and the desired seasonality s. The user can input exogenous variables using optional argument X and specify the desired number of random seeds nseeds to perform the estimation.","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"ss = statespace(y, s; X = X, nseeds = nseeds)","category":"page"},{"location":"manual/#Simulation-1","page":"Manual","title":"Simulation","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"Simulation is made using the function simulate. It receives as argument a StateSpace object, the number of steps ahead N and the number of scenarios to simulate S.","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"simulation = simulate(ss, N, S)","category":"page"},{"location":"manual/#Example-1","page":"Manual","title":"Example","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"Let's take the Air Passenger time series to build and example. Taking the log of the series we should have a nice time series to simulate. The code is in the example folder.","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"using CSV, StateSpaceModels, Plots, Statistics, Dates\n\n#load the AirPassengers dataset\nAP = CSV.read(\"AirPassengers.csv\")\n\n#Take the log of the series\nlogAP = log.(Array{Float64}(AP[:Passengers]))\n\np1 = plot(AP[:Date], logAP, label = \"AirPassengers timeseries\", size = (1000, 500))","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"(Image: Log of Air Passengers time series)","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"Estimating a StateSpaceModel gives us the trend and seasonal components of the time series.","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"#Define its seasonality \ns = 12\n\n#Estimate a StateSpace Structure\nss = statespace(logAP, s)\n\n#Analyze its decomposition in seasonal and trend\np2 = plot(AP[:Date], ss.state.seasonal, label = \"AirPassengers seasonal\", size = (1000, 500))\np3 = plot(AP[:Date], ss.state.trend, label = \"AirPassengers trend\", size = (1000, 500))","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"(Image: Lof of Air Passengers trend component) (Image: Log of Air Passengers seasonal component)","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"We can also simulate future scenarios for this time series. In this example, we simulate 100 scenarios up to five years (60 observations) ahead.","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"#Simulate 100 scenarios, 60 steps ahead\nnum_scenarios = 100\nnum_steps_ahead = 60\nsimulation = simulate(ss, num_steps_ahead, num_scenarios)\n\n#Define simulation dates\nfirstdate = AP[:Date][end] + Month(1)\nnewdates = collect(firstdate:Month(1):firstdate + Month(num_steps_ahead - 1))\n\n#Evaluating the mean of the forecast and its quantiles\nsimulation_mean = mean(simulation, dims = 3)[1, :, :]\n\nn = length(logAP)\nnmonths = length(simulation[1, :, 1])\nsimulation_q05 = zeros(nmonths)\nsimulation_q95 = zeros(nmonths)\nfor t = 1:nmonths\n    simulation_q05[t] = quantile(simulation[1, t, :], 0.05)\n    simulation_q95[t] = quantile(simulation[1, t, :], 0.95)\nend\n\nplot!(p1, newdates, [simulation_q05, simulation_mean, simulation_q95], labels = [\"5% quantile\", \"mean\", \"95% quantile\"])","category":"page"},{"location":"manual/#","page":"Manual","title":"Manual","text":"(Image: Log of Air Passengers simulation)","category":"page"},{"location":"manual/#Reference-1","page":"Manual","title":"Reference","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"size\nztr","category":"page"},{"location":"manual/#Base.size","page":"Manual","title":"Base.size","text":"size(model::StateSpaceModel)\n\nReturn the dimensions n, p, m and r of the StateSpaceModel\n\n\n\n\n\n","category":"function"},{"location":"manual/#StateSpaceModels.ztr","page":"Manual","title":"StateSpaceModels.ztr","text":"matrices(model::StateSpaceModel)\n\nReturn the state space model arrays Z, T and R of the StateSpaceModel\n\n\n\n\n\n","category":"function"}]
}
