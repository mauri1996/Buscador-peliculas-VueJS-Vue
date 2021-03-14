<template>
     <div>
        <div class="form-inline md-form form-sm mt-0">
            <div class="input-group md-form form-sm form-2 pl-0 w-100">
                <div v-show="query" class="input-group-append">                        
                    <span class="btn btn-danger" @click="reset()">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
                <input class="form-control my-0 py-1 green border"
                    type="text"
                    placeholder="Buscar"
                    aria-label="Buscar"                        
                    v-model="query"
                    >
                
                <button class="input-group-text" @click.prevent="newSearch()">                        
                    <i class="fas fa-search text-grey"
                    aria-hidden="true">
                    </i>
                </button>                                                              
            
                <button class="input-group-text" @click.prevent="reset()">                        
                    <i class="fas fa-home" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
</template>

